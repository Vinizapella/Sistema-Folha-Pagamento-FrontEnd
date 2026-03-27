import Header from './components/layout/Header'
import StatCard from './components/ui/StatCard'
import colaboradoresIcon from './assets/colaboradores.png'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            icon={<img src={colaboradoresIcon} className="w-8 h-8" />}
            label="Colaboradores"
            value="0"
          />
          <StatCard
            icon="$"
            label="Folha Total"
            value="R$ 0,00"
          />
          <StatCard
            icon="↗"
            label="Adicionais"
            value="R$ 0,00"
          />
        </div>

      </main>
    </div>
  )
}

export default App