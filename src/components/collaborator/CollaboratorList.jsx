import { IconUsers, IconTrash, IconBriefcase, IconCommission, IconProduction } from '../ui/Icons'
import { useCollaboratorList } from './useCollaboratorList'

function CollaboratorList() {
  const { collaborators, loading } = useCollaboratorList()

  const formatCurrency = (val) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0)

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-10 border-2">
      
      <div className="flex items-center gap-2 mb-6">
        <IconUsers className="text-blue-600" />
        <h2 className="text-base font-semibold text-gray-800">Colaboradores Cadastrados</h2>
        <span className="ml-2 bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
          {loading ? '...' : collaborators.length}
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center py-12 text-gray-400">Carregando...</div>
      ) : collaborators.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <IconUsers size={48} className="text-gray-300" />
          <p className="mt-4 text-sm text-gray-500 font-medium">Nenhum colaborador cadastrado ainda.</p>
          <p className="text-sm text-gray-400">Use o formulário acima para adicionar.</p>
        </div>
      ) : (

          <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-400 text-xs uppercase font-bold">
                <th className="px-2 py-3">Colaborador</th>
                <th className="px-2 py-3">Vínculo</th>
                <th className="px-2 py-3">Detalhes</th>
                <th className="px-2 py-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {collaborators.map((colab) => (
                <tr key={colab.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-2">
                    <p className="text-sm font-semibold text-gray-800">{colab.name}</p>
                    <p className="text-xs text-gray-400 font-mono">#{colab.registrationNumber}</p>
                  </td>
                  <td className="py-4 px-2">
                    <BondBadge type={colab.bond_type} />
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600">
                    <FinancialDetails colab={colab} format={formatCurrency} />
                  </td>
                  <td className="py-4 px-2 text-right">
                    <button className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <IconTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const BondBadge = ({ type }) => {
  const configs = {
    STANDARD: { label: 'Padrão', icon: <IconBriefcase size={14} />, color: 'bg-blue-50 text-blue-600' },
    COMMISSIONED: { label: 'Comissionado', icon: <IconCommission size={14} />, color: 'bg-purple-50 text-purple-600' },
    PRODUCTION: { label: 'Produção', icon: <IconProduction size={14} />, color: 'bg-orange-50 text-orange-600' }
  }
  const config = configs[type] || configs.STANDARD
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${config.color}`}>
      {config.icon} {config.label}
    </span>
  )
}

const FinancialDetails = ({ colab, format }) => {
  if (colab.bond_type === 'COMMISSIONED') {
    return (
      <div className="flex flex-col">
        <span className="font-medium text-gray-700">{format(colab.totalSales)}</span>
        <span className="text-[10px] text-gray-400 uppercase">Comissão: {colab.percentageCommission}%</span>
      </div>
    )
  }
  if (colab.bond_type === 'PRODUCTION') {
    return (
      <div className="flex flex-col">
        <span className="font-medium text-gray-700">{colab.quantityProduced} peças</span>
        <span className="text-[10px] text-gray-400 uppercase">Valor/Peça: {format(colab.valuePerPiece)}</span>
      </div>
    )
  }
  return <span className="text-gray-400 italic text-xs">Apenas salário base</span>
}

export default CollaboratorList