import { IconUsers } from '../ui/Icons'

function CollaboratorList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-10">

      <div className="flex items-center gap-2 mb-6">
        <IconUsers className="text-blue-600" />
        <h2 className="text-base font-semibold text-gray-800">Colaboradores Cadastrados</h2>
        <span className="ml-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">0</span>
      </div>

      <div className="flex flex-col items-center justify-center py-12 mb-10 text-gray-400">
        <IconUsers size={48} className="text-gray-300" />
        <p className="mt-4 text-sm text-gray-500">Nenhum colaborador cadastrado ainda.</p>
        <p className="text-sm text-gray-400">Use o formulário acima para adicionar.</p>
      </div>

    </div>
  )
}

export default CollaboratorList