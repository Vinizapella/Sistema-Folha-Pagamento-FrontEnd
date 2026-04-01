import { IconBuilding } from '../ui/Icons'

function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-3">
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-3">

        <IconBuilding className="h-7 w-7 text-blue-600" />

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