import { IconUsers, IconTwitter, IconFacebook, IconInstagram, IconLinkedin, IconMail, IconMapPin } from '../ui/Icons'

function Footer() {
  const socialIcons = [
    <IconTwitter key="twitter" />,
    <IconFacebook key="facebook" />,
    <IconInstagram key="instagram" />,
    <IconLinkedin key="linkedin" />,
  ]

  return (
    <footer className="bg-gray-900 text-gray-400 mt-10 py-10 px-6 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-17">

        {/* Logo e descrição */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <IconUsers className="text-white" />
            <h3 className="text-white font-semibold text-lg">Gestão de Colaboradores</h3>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Sistema completo para cadastro e cálculo salarial. Gerencie folha de pagamento, comissões e bônus com facilidade.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((icon, i) => (
              <div key={i} className="bg-gray-700 hover:bg-gray-600 text-white transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Empresa e Recursos */}
        <div className="grid grid-cols-2 gap-8 md:contents">

          <div className="md:ml-10">
            <h4 className="text-white font-medium mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Dashboard</li>
              <li className="hover:text-white cursor-pointer transition-colors">Colaboradores</li>
              <li className="hover:text-white cursor-pointer transition-colors">Relatórios</li>
              <li className="hover:text-white cursor-pointer transition-colors">Configurações</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Central de Ajuda</li>
              <li className="hover:text-white cursor-pointer transition-colors">Documentação</li>
              <li className="hover:text-white cursor-pointer transition-colors">Termos de Uso</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacidade</li>
            </ul>
          </div>

        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-medium mb-3">Contato</h4>
          <div className="flex items-center gap-2 mb-1 text-sm">
            <IconMail />
            <p>contato@gestaocolab.com.br</p>
          </div>
          <h4 className="text-white font-medium mt-4 mb-2">Endereço</h4>
          <div className="flex items-start gap-2 text-sm">
            <IconMapPin className="flex-shrink-0 mt-0.5" />
            <p>Rua Exemplo, 123 - Centro, São Paulo</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer