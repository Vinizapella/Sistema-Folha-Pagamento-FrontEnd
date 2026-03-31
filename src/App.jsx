import React from 'react';
import Header from './components/layout/Header';
import StatCard from './components/ui/StatCard';
import CollaboratorForm from './components/collaborator/CollaboratorForm';
import CollaboratorList from './components/collaborator/CollaboratorList';
import Footer from './components/layout/Footer';

function App() {

  return (

    <div className="bg-gray-100 min-h-screen">

      <Header />

      <main className="max-w-5xl mx-auto mt-5 px-6 py-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          <StatCard

            icon={
              <svg className="text-blue-600" 
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

            }

            label="Colaboradores"

            value="0"

          />

          <StatCard 

            icon={

              <svg className="text-emerald-500" 
                   width="24" 
                   height="24" 
                   viewBox="0 0 24 24" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="2" 
                   strokeLinecap="round" 
                   strokeLinejoin="round">

                <line x1="12" 
                      y1="1" 
                      x2="12" 
                      y2="23" />

                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />

              </svg>

            } 

            label="Folha Total" 

            value="R$ 0,00" 

          />

          <StatCard 

            icon={

              <svg className="text-orange-500" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round">

                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />

                <polyline points="17 6 23 6 23 12" />

              </svg>

            } 

            label="Adicionais" 

            value="R$ 0,00" 

          />

        </div>

        <CollaboratorForm />
        
        <CollaboratorList />

      </main>

      <Footer />

    </div>

  );

}

export default App;