import { useState } from 'react'
import { IconUserPlus, IconBriefcase, IconCommission, IconProduction } from '../ui/Icons'
import InputField from '../ui/InputField'
import BondTypeCard from '../ui/BondTypeCard'
import { CommissionFields, ProductionFields } from './CollaboratorFormFields'
import { collaboratorService } from '../../services/collaboratorService'

function CollaboratorForm() {
  const [loading, setLoading] = useState(false)
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
    e.preventDefault();

    const cleanedName = formData.name ? formData.name.trim() : "";
    const regNumber = Number(formData.registrationNumber);

    if (!cleanedName) return alert("O nome não pode estar vazio!");
    if (!regNumber || regNumber <= 0) return alert("O número de registro deve ser maior que 0!");

    setLoading(true);

    let payload = {
      bond_type: formData.bond_type,
      registrationNumber: regNumber,
      name: cleanedName
    };

    if (formData.bond_type === 'COMMISSIONED') {
      payload.totalSales = Number(formData.totalSales) || 0;
      payload.percentageCommission = Number(formData.percentageCommission) || 0;
    } 
    else if (formData.bond_type === 'PRODUCTION') {
      payload.valuePerPiece = Number(formData.valuePerPiece) || 0;
      payload.quantityProduced = Number(formData.quantityProduced) || 0;
    }

    console.log("Enviando para o Java:", payload);

    try {
      const result = await collaboratorService.register(payload);
      console.log("Sucesso do Java:", result);
      alert("Colaborador cadastrado com sucesso!");
      
      setFormData({
        bond_type: 'STANDARD',
        registrationNumber: '',
        name: '',
        totalSales: '',
        percentageCommission: '',
        valuePerPiece: '',
        quantityProduced: ''
      });
    } catch (error) {
      console.error("Erro detalhado:", error);
      alert("Erro ao cadastrar: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">
      
      <div className="flex items-center gap-2 mb-1">
        <IconUserPlus className="text-blue-600" />
        <h2 className="text-base font-semibold text-gray-800">Cadastrar Colaborador</h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">Salário base: R$ 2.000,00 (Configurado no Spring Boot)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <InputField 
          id="registrationNumber"
          label="Nº Registro" 
          type="number" 
          required
          value={formData.registrationNumber}
          onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
        />
        <InputField 
          id="name"
          label="Nome Completo" 
          required
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <p className="text-sm font-medium text-gray-700 mb-2">Tipo de Vínculo</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
        <BondTypeCard
          title="Funcionário Padrão"
          description="Apenas salário base"
          selected={formData.bond_type === 'STANDARD'}
          onClick={() => handleInputChange('bond_type', 'STANDARD')}
          icon={<IconBriefcase size={18} />}
        />
        <BondTypeCard
          title="Comissionado"
          description="Base + comissão"
          selected={formData.bond_type === 'COMMISSIONED'}
          onClick={() => handleInputChange('bond_type', 'COMMISSIONED')}
          icon={<IconCommission size={18} />}
        />
        <BondTypeCard
          title="Produção"
          description="Base + bônus peça"
          selected={formData.bond_type === 'PRODUCTION'}
          onClick={() => handleInputChange('bond_type', 'PRODUCTION')}
          icon={<IconProduction size={18} />}
        />
      </div>

      {formData.bond_type === 'COMMISSIONED' && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <CommissionFields formData={formData} onChange={handleInputChange} />
        </div>
      )}
      
      {formData.bond_type === 'PRODUCTION' && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <ProductionFields formData={formData} onChange={handleInputChange} />
        </div>
      )}

      <div className="mt-8">
        <button 
          type="submit" 
          disabled={loading}
          className={`w-full md:w-auto text-white font-medium py-3 px-8 rounded-lg text-sm flex items-center justify-center gap-2 transition-all ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg'
          }`}
        >
          <IconUserPlus size={18} className="text-white" />
          {loading ? 'Processando...' : 'Finalizar Cadastro'}
        </button>
      </div>
    </form>
  )
}

export default CollaboratorForm