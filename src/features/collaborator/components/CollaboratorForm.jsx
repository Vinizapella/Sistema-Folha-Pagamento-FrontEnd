import { IconUserPlus, IconBriefcase, IconCommission, IconProduction } from '../../components/ui/Icons'
import InputField from '../../components/ui/InputField'
import BondTypeCard from '../../components/ui/BondTypeCard'
import { CommissionFields, ProductionFields } from './CollaboratorFormFields'
import { useCollaboratorForm } from './useCollaboratorForm' 

function CollaboratorForm() {
  const { formData, loading, handleInputChange, handleSubmit } = useCollaboratorForm()

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">
      <HeaderSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <InputField 
          label="Nº Registro" type="number" required
          value={formData.registrationNumber}
          onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
        />
        <InputField 
          label="Nome Completo" required
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <BondSelectionSection currentType={formData.bond_type} onSelect={handleInputChange} />

      {formData.bond_type === 'COMMISSIONED' && <CommissionFields formData={formData} onChange={handleInputChange} />}
      {formData.bond_type === 'PRODUCTION' && <ProductionFields formData={formData} onChange={handleInputChange} />}

      <SubmitButton loading={loading} />
    </form>
  )
}

const HeaderSection = () => (
  <>
    <div className="flex items-center gap-2 mb-3">
      <IconUserPlus className="text-blue-600" />
      <h2 className="text-base font-semibold text-gray-800 ">Cadastrar Colaborador</h2>
    </div>
    <p className="text-sm text-gray-500 mb-5">Salário base: R$ 2.000,00 para todos os colaboradores</p>
  </>
)

const BondSelectionSection = ({ currentType, onSelect }) => (
  <div className="mb-7">
    <p className="text-sm font-medium text-gray-700 mb-2">Tipo de Vínculo</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <BondTypeCard
        title="Funcionário Padrão"
        description="Apenas salário base" 
        selected={currentType === 'STANDARD'}
        onClick={() => onSelect('bond_type', 'STANDARD')}
        icon={<IconBriefcase size={18} />}
      />
      <BondTypeCard
        title="Comissionado"
        description="Base + comissão sobre vendas" 
        selected={currentType === 'COMMISSIONED'}
        onClick={() => onSelect('bond_type', 'COMMISSIONED')}
        icon={<IconCommission size={18} />}
      />
      <BondTypeCard
        title="Produção"
        description="Base + bônus por peça" 
        selected={currentType === 'PRODUCTION'}
        onClick={() => onSelect('bond_type', 'PRODUCTION')}
        icon={<IconProduction size={18} />}
      />
    </div>
  </div>
)

const SubmitButton = ({ loading }) => (
  <button 
    type="submit" disabled={loading}
    className={`w-full md:w-auto text-white font-medium py-3 px-8 rounded-lg text-sm flex items-center justify-center gap-2 transition-all ${
      loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
    }`}
  >
    <IconUserPlus size={18} />
    {loading ? 'Processando...' : 'Finalizar Cadastro'}
  </button>
)

export default CollaboratorForm