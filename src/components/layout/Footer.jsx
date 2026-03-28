function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-400 mt-10 py-10 px-6">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="md:col-span-1">

            <div className="flex items-center gap-2 mb-3">

            <span className="text-white text-lg">👥</span>

            <h3 className="text-white font-semibold">Gestão de Colaboradores</h3>

          </div>

          <p className="text-sm leading-relaxed mb-4">

            Sistema completo para cadastro e cálculo salarial. Gerencie folha de pagamento, comissões e bônus com facilidade.

          </p>

          <div className="flex gap-3">

            {['🐦', '💼', '📷', '🎵'].map((icon, i) => (

              <div key={i} className="bg-gray-700 hover:bg-gray-600 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center text-sm">

                {icon}

              </div>

            ))}

          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 md:contents">

            <div className="md:ml-10">

                <h4 className="text-white font-medium mb-3">Empresa</h4>

                <ul className="space-y-2 text-sm">

                    <li className="hover:text-white cursor-pointer">Dashboard</li>

                    <li className="hover:text-white cursor-pointer">Colaboradores</li>

                    <li className="hover:text-white cursor-pointer">Relatórios</li>

                    <li className="hover:text-white cursor-pointer">Configurações</li>

                </ul>

            </div>

            <div>

                <h4 className="text-white font-medium mb-3">Recursos</h4>

                <ul className="space-y-2 text-sm">

                    <li className="hover:text-white cursor-pointer">Central de Ajuda</li>

                    <li className="hover:text-white cursor-pointer">Documentação</li>

                    <li className="hover:text-white cursor-pointer">Termos de Uso</li>

                    <li className="hover:text-white cursor-pointer">Privacidade</li>

                </ul>

            </div>

        </div>

        <div>

          <h4 className="text-white font-medium mb-3">Contato</h4>

          <p className="text-sm mb-1">✉️ contato@gestaocolab.com.br</p>

          <h4 className="text-white font-medium mt-4 mb-1">Endereço</h4>

          <p className="text-sm">📍 Rua Exemplo, 123 - Centro, São Paulo</p>

        </div>

      </div>

    </footer>

  )

}

export default Footer