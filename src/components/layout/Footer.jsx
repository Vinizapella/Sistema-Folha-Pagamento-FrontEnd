import React from 'react';

function Footer() {
  
  const socialIcons = [

    <svg key="twitter" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round">

      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />

    </svg>,

    <svg key="facebook" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round">

      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />

    </svg>,
    
    <svg key="instagram" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round">

      <rect x="2" 
            y="2" 
            width="20" 
            height="20" 
            rx="5" 
            ry="5" 
      />

      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

      <line x1="17.5" 
            y1="6.5"
            x2="17.51"
            y2="6.5"
      />

    </svg>,

    <svg key="linkedin" 
         width="18" 
         height="18" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round">

      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />

      <rect x="2"
            y="9" 
            width="4" 
            height="12" 
      />

      <circle cx="4" 
              cy="4" 
              r="2" 
      />

    </svg>

  ];

  return (
    <footer className="bg-gray-900 text-gray-400 mt-10 py-10 px-6 font-sans">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-17">
        
        <div className="md:col-span-1">

          <div className="flex items-center gap-2 mb-3">

            <span className="text-white">

              <svg className="text-white" 
                   width="24" 
                   height="24" 
                   viewBox="0 0 24 24" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="2" 
                   strokeLinecap="round" 
                   strokeLinejoin="round">

                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />

                <circle cx="8.5" 
                        cy="7"
                        r="4" />

                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />

                <circle cx="18"
                        cy="8.5" 
                        r="3" />

              </svg>

            </span>

            <h3 className="text-white font-semibold text-lg">Gestão de Colaboradores</h3>

          </div>

          <p className="text-sm leading-relaxed mb-4">

            Sistema completo para cadastro e cálculo salarial. Gerencie folha de pagamento, comissões e bônus com facilidade.

          </p>

          <div className="flex gap-3">

            {socialIcons.map((icon, i) => (

              <div 

                key={i} 

                className="bg-gray-700 hover:bg-gray-600 text-white transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">

                {icon}

              </div>

            ))}

          </div>

        </div>

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

        <div>

          <h4 className="text-white font-medium mb-3">Contato</h4>

          <div className="flex items-center gap-2 mb-1 text-sm">

            <svg width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round">

              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />

              <polyline points="22,6 12,13 2,6" />

            </svg>

            <p>contato@gestaocolab.com.br</p>

          </div>

          <h4 className="text-white font-medium mt-4 mb-2">Endereço</h4>

          <div className="flex items-start gap-2 text-sm">

            <svg className="flex-shrink-0 mt-0.5"
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round">

              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />

              <circle cx="12" 
                      cy="10" 
                      r="3" />

            </svg>

            <p>Rua Exemplo, 123 - Centro, São Paulo</p>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;