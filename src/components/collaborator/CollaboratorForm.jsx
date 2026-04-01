import { useState } from 'react' 
import { IconUserPlus, IconBriefcase, IconCommission, IconProduction } from '../ui/Icons'
import InputField from '../ui/InputField'
import BondTypeCard from '../ui/BondTypeCard'
import { CommissionFields, ProductionFields } from './CollaboratorFormFields'

function CollaboratorForm() {
  const [formData, setFormData] = useState({
    bond_type: 'STANDARD', 
    registrationNumber: '',
    name: '',
    totalSales: '',
    percentageCommission: '',
    valuePerPiece: '',
    quantityProduced: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      bond_type: formData.bond_type,
      registrationNumber: Number(formData.registrationNumber),
      name: formData.name,
    }

    if (formData.bond_type === 'COMMISSIONED') {
      payload.totalSales = Number(formData.totalSales)
      payload.percentageCommission = Number(formData.percentageCommission)
    } else if (formData.bond_type === 'PRODUCTION') {
      payload.valuePerPiece = Number(formData.valuePerPiece)
      payload.quantityProduced = Number(formData.quantityProduced)
    }

    console.log("Payload pronto para o Java:", payload)
    
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <InputField 
          id="registrationNumber"
          label="Nº Registro" 
          type="number" 
          value={formData.registrationNumber}
          onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
        />
        <InputField 
          id="name"
          label="Nome Completo" 
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
        <BondTypeCard
          title="Funcionário Padrão"
          selected={formData.bond_type === 'STANDARD'}
          onClick={() => handleInputChange('bond_type', 'STANDARD')}
          icon={<IconBriefcase size={18} />}
        />
        <BondTypeCard
          title="Comissionado"
          selected={formData.bond_type === 'COMMISSIONED'}
          onClick={() => handleInputChange('bond_type', 'COMMISSIONED')}
          icon={<IconCommission size={18} />}
        />
        <BondTypeCard
          title="Produção"
          selected={formData.bond_type === 'PRODUCTION'}
          onClick={() => handleInputChange('bond_type', 'PRODUCTION')}
          icon={<IconProduction size={18} />}
        />
      </div>

      {formData.bond_type === 'COMMISSIONED' && <CommissionFields formData={formData} onChange={handleInputChange} />}
      {formData.bond_type === 'PRODUCTION' && <ProductionFields formData={formData} onChange={handleInputChange} />}

      <button type="submit" className="...">
        <IconUserPlus size={18} />
        Cadastrar Colaborador
      </button>
    </form>
  )
}