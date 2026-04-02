import { IconUsers, IconTrash, IconRotateCw } from '../../../components/ui/Icons'
import { collaboratorService } from '../services/collaboratorService'

function CollaboratorList({ collaborators, loading, refresh }) {

  const formatCurrency = (val) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0)

  const totalPayroll = collaborators.reduce((acc, c) => acc + (c.finalSalary || 0), 0)

  console.log('Colaboradores:', collaborators)

  const handleDelete = async (id) => {
    if (!confirm('Deseja realmente excluir este colaborador?')) return
    try {

      console.log(id);

      await collaboratorService.delete(id)
      refresh()
    } catch (error) {
      alert('Erro ao excluir: ' + error.message)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-10 border-2">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <IconUsers className="text-blue-600" />
          <h2 className="text-base font-semibold text-gray-800">Colaboradores Cadastrados</h2>
          <span className="ml-1 bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
            {loading ? '...' : collaborators.length}
          </span>
          <button
            onClick={refresh}
            disabled={loading}
            className={`p-1.5 rounded-lg transition-all ${loading ? 'animate-spin text-blue-400' : 'text-gray-300 hover:text-blue-500 hover:bg-blue-50'}`}
          >
            <IconRotateCw size={14} />
          </button>
        </div>
        {!loading && collaborators.length > 0 && (
          <div className="text-right">
            <span className="text-xs text-gray-400">Folha total: </span>
            <span className="text-sm font-bold text-gray-800">{formatCurrency(totalPayroll)}</span>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-12 text-gray-400 text-sm">Carregando...</div>

      ) : collaborators.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <IconUsers size={48} className="text-gray-300" />
          <p className="mt-4 text-sm text-gray-500 font-medium">Nenhum colaborador cadastrado ainda.</p>
          <p className="text-sm text-gray-400">Use o formulário acima para adicionar.</p>
        </div>

      ) : (
        <>
          {/* Tabela — desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-2 py-3 text-sm font-medium text-gray-400">Nome</th>
                  <th className="px-2 py-3 text-sm font-medium text-gray-400">Vínculo</th>
                  <th className="px-2 py-3 text-sm font-medium text-gray-400">Detalhes</th>
                  <th className="px-2 py-3 text-sm font-medium text-gray-400 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {collaborators.map((colab) => (
                  <tr key={colab.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-2">
                      <p className="text-sm font-semibold text-gray-800">{colab.name}</p>
                      <p className="text-xs text-gray-400">Resgitro #{String(colab.registrationNumber).padStart(4, '0')}</p>
                    </td>
                    <td className="py-4 px-2">
                      <BondBadge type={colab.bond_type} />
                    </td>
                    <td className="py-4 px-2 text-sm text-gray-600">
                      <FinancialDetails colab={colab} format={formatCurrency} />
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button
                        onClick={() => handleDelete(colab.id)}
                        className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <IconTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="flex flex-col gap-3 md:hidden">
            {collaborators.map((colab) => (
              <div key={colab.id} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{colab.name}</p>
                    <p className="text-xs text-gray-400">Resgitro #{String(colab.registrationNumber).padStart(4, '0')}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(colab.id)}
                    className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <IconTrash size={16} />
                  </button>
                </div>
                <BondBadge type={colab.bond_type} />
                <div className="mt-2 text-sm text-gray-600">
                  <FinancialDetails colab={colab} format={formatCurrency} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const BondBadge = ({ type }) => {
  const configs = {
    STANDARD:     { label: 'Padrão',       color: 'bg-gray-200 text-gray-600' },
    COMMISSIONED: { label: 'Comissionado', color: 'bg-blue-600 text-white'    },
    PRODUCTION:   { label: 'Produção',     color: 'bg-white text-gray-600 border' },
  }
  const config = configs[type] || configs.STANDARD
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  )
}

const FinancialDetails = ({ colab, format }) => {
  if (colab.bond_type === 'COMMISSIONED') {
    return (
      <span>
        Vendas: {format(colab.totalSales)} · Comissão: {colab.percentageCommission}% · Salário: {format(colab.finalSalary)}
      </span>
    )
  }
  if (colab.bond_type === 'PRODUCTION') {
    return (
      <span>
        {colab.quantityProduced} peças × {format(colab.valuePerPiece)} · Salário: {format(colab.finalSalary)}
      </span>
    )
  }
  return <span>Salário base: {format(colab.finalSalary)}</span>
}

export default CollaboratorList