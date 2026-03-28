  function Header() {

    return (

      <header className="w-full bg-gray-80 shadow-sm py-3">

        <div className="max-w-5xl mx-auto px-6 flex items-center gap-3">

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-blue-600" aria-hidden="true">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>

          <div>

            <h1 className="text-lg font-medium leading-tight">

              Gestão de Colaboradores

            </h1>

            <p className="text-sm text-gray-500">

              Cadastro e cálculo salarial

            </p>

          </div>

        </div>

      </header>

    )
    
  }

  export default Header