import { useState } from 'react' 
import { IconUserPlus, IconBriefcase, IconCommission, IconProduction } from '../ui/Icons'
import InputField from '../ui/InputField'
import BondTypeCard from '../ui/BondTypeCard'

import { CommissionFields, ProductionFields } from './CollaboratorFormFields'

function CollaboratorForm() {
  const [bondType, setBondType] = useState('padrao')

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">
      <div className="flex items-center gap-2 mb-1">
        <IconUserPlus className="text-blue-600" />
        <h2 className="text-base font-semibold text-gray-800">Cadastrar Colaborador</h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">Salário base: R$ 2.000,00 para todos os colaboradores</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <InputField label="Nº Registro" placeholder="1" type="number" />
        <InputField label="Nome Completo" placeholder="Digite o nome do colaborador" />
      </div>

      <p className="text-sm font-medium text-gray-700 mb-2">Tipo de Vínculo</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
        <BondTypeCard
          icon={<IconBriefcase size={18} />}
          title="Funcionário Padrão"
          description="Apenas salário base"
          selected={bondType === 'padrao'}
          onClick={() => setBondType('padrao')}
        />
        <BondTypeCard
          icon={<IconCommission size={18} />}
          title="Comissionado"
          description="Base + comissão sobre vendas"
          selected={bondType === 'comissionado'}
          onClick={() => setBondType('comissionado')}
        />
        <BondTypeCard
          icon={<IconProduction size={18} />}
          title="Produção"
          description="Base + bônus por peça"
          selected={bondType === 'producao'}
          onClick={() => setBondType('producao')}
        />
      </div>

      {bondType === 'comissionado' && <CommissionFields />}
      {bondType === 'producao' && <ProductionFields />}

      <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-sm flex items-center justify-center gap-2">
        <IconUserPlus size={18} className="text-white" />
        Cadastrar Colaborador
      </button>
    </div>
  )
}

export default CollaboratorForm