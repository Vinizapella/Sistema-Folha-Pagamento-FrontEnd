import { IconUserPlus, IconBriefcase, IconCommission, IconProduction } from '../ui/Icons'
import InputField from '../ui/InputField'
import BondTypeCard from '../ui/BondTypeCard'

function CollaboratorForm() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">

      {/* Título */}
      <div className="flex items-center gap-2 mb-1">
        <IconUserPlus className="text-blue-600" />
        <h2 className="text-base font-semibold text-gray-800">Cadastrar Colaborador</h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">Salário base: R$ 2.000,00 para todos os colaboradores</p>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <InputField label="Nº Registro" placeholder="1" type="number" />
        <InputField label="Nome Completo" placeholder="Digite o nome do colaborador" />
      </div>

      {/* Tipo de Vínculo */}
      <p className="text-sm font-medium text-gray-700 mb-2">Tipo de Vínculo</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
        <BondTypeCard
          icon={<IconBriefcase size={18} />}
          title="Funcionário Padrão"
          description="Apenas salário base"
          selected={true}
        />
        <BondTypeCard
          icon={<IconCommission size={18} />}
          title="Comissionado"
          description="Base + comissão sobre vendas"
          selected={false}
        />
        <BondTypeCard
          icon={<IconProduction size={18} />}
          title="Produção"
          description="Base + bônus por peça"
          selected={false}
        />
      </div>

      {/* Botão */}
      <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-sm flex items-center justify-center gap-2">
        <IconUserPlus size={18} className="text-white" />
        Cadastrar Colaborador
      </button>

    </div>
  )
}

export default CollaboratorForm