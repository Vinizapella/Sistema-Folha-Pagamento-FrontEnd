import { IconUserPlus, IconBriefcase, IconCommission, IconProduction } from '../../../components/ui/Icons'
import InputField from '../../../components/ui/InputField'
import BondTypeCard from '../../../components/ui/BondTypeCard'
import { CommissionFields, ProductionFields } from './CollaboratorFormFields'
import { useCollaboratorForm } from '../hooks/useCollaboratorForm'

function CollaboratorForm({ onSuccess }) {
  const { formData, loading, handleInputChange, handleSubmit } = useCollaboratorForm(onSuccess)

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">

      <div className="flex items-center gap-2 mb-1">
        <IconUserPlus className="text-blue-600" />
        <h2 className="text-base font-semibold text-gray-800">Cadastrar Colaborador</h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">Salário base: R$ 2.000,00 para todos os colaboradores</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <InputField
          label="Nº Registro"
          type="number"
          placeholder="Ex: 1001"
          required
          value={formData.registrationNumber}
          onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
        />
        <InputField
          label="Nome Completo"
          placeholder="Digite o nome do colaborador"
          required
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <p className="text-sm font-medium text-gray-700 mb-2">Tipo de Vínculo</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <BondTypeCard
          icon={<IconBriefcase size={18} />}
          title="Funcionário Padrão"
          description="Apenas salário base"
          selected={formData.bond_type === 'STANDARD'}
          onClick={() => handleInputChange('bond_type', 'STANDARD')}
        />
        <BondTypeCard
          icon={<IconCommission size={18} />}
          title="Comissionado"
          description="Base + comissão sobre vendas"
          selected={formData.bond_type === 'COMMISSIONED'}
          onClick={() => handleInputChange('bond_type', 'COMMISSIONED')}
        />
        <BondTypeCard
          icon={<IconProduction size={18} />}
          title="Produção"
          description="Base + bônus por peça"
          selected={formData.bond_type === 'PRODUCTION'}
          onClick={() => handleInputChange('bond_type', 'PRODUCTION')}
        />
      </div>

      {formData.bond_type === 'COMMISSIONED' && (
        <CommissionFields formData={formData} onChange={handleInputChange} />
      )}
      {formData.bond_type === 'PRODUCTION' && (
        <ProductionFields formData={formData} onChange={handleInputChange} />
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full md:w-auto text-white font-medium py-3 px-6 rounded-lg text-sm flex items-center justify-center gap-2 transition-all ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <IconUserPlus size={18} />
        {loading ? 'Processando...' : 'Cadastrar Colaborador'}
      </button>

    </form>
  )
}

export default CollaboratorForm