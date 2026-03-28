function CollaboratorList() {

  return (

    <div className="bg-white rounded-xl shadow-sm p-6 mt-10">

      <div className="flex items-center gap-2 mb-6">

        <span className="text-blue-600 text-xl">👥</span>

            <h2 className="text-base font-semibold text-gray-800">Colaboradores Cadastrados</h2>

        <span className="ml-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">0</span>

      </div>

      <div className="flex flex-col items-center justify-center py-12 mb-10 text-gray-400">

        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>

        <p className="mt-4 text-sm text-gray-500">Nenhum colaborador cadastrado ainda.</p>

        <p className="text-sm text-gray-400">Use o formulário acima para adicionar.</p>

      </div>

    </div>
  )
}

export default CollaboratorList