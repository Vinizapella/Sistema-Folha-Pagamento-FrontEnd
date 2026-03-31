import React from 'react';
import InputField from '../ui/InputField';
import BondTypeCard from '../ui/BondTypeCard';

function CollaboratorForm() {

  return (

    <div className="bg-white rounded-xl shadow-sm p-6 border-2 mt-10">
      
      <div className="flex items-center gap-2 mb-1">

        <span className="text-blue-600 flex items-center justify-center">

          <svg width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round">

            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />

            <circle cx="8.5" 
                    cy="7" 
                    r="4" />

            <line x1="20" 
                  y1="8" 
                  x2="20" 
                  y2="14" />

            <line x1="23" 
                  y1="11" 
                  x2="17" 
                  y2="11" />

          </svg>

        </span>

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

          icon={

            <svg width="18" 
                 height="18" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="1.5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round">

              <rect x="2" 
                    y="7" 
                    width="20" 
                    height="14" 
                    rx="2" 
                    ry="2" />

              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />

            </svg>

          } 

          title="Funcionário Padrão" 

          description="Apenas salário base" 

          selected={true} 

        />

        <BondTypeCard 

          icon={

            <svg width="18" 
                 height="18" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="1.5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round">

              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />

              <polyline points="16 7 22 7 22 13" />

            </svg>

          } 

          title="Comissionado" 

          description="Base + comissão sobre vendas" 

          selected={false} 

        />

        <BondTypeCard 

          icon={

            <svg width="18" 
                 height="18" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="1.5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round">

              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />

              <circle cx="17" 
                      cy="16" 
                      r="1" />

              <circle cx="12" 
                      cy="16" 
                      r="1" />

              <circle cx="7" 
                      cy="16" 
                      r="1" />

            </svg>

          } 

          title="Produção" 

          description="Base + bônus por peça" 

          selected={false} 

        />

      </div>

      <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-sm flex items-center justify-center gap-2">

        <svg width="18" 
             height="18" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="1.5" 
             strokeLinecap="round" 
             strokeLinejoin="round">

          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />

          <circle cx="8.5" 
                  cy="7" 
                  r="4" />

          <line x1="20" 
                y1="8" 
                x2="20" 
                y2="14" />

          <line x1="23" 
                y1="11" 
                x2="17" 
                y2="11" />

        </svg>

        Cadastrar Colaborador

      </button>

    </div>

  );

}

export default CollaboratorForm;