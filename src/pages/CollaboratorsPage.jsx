import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StatCard from '../components/ui/StatCard'
import CollaboratorForm from '../features/collaborator/components/CollaboratorForm'
import CollaboratorList from '../features/collaborator/components/CollaboratorList'
import { IconUsers, IconDollar, IconTrending } from '../components/ui/Icons'

export default function CollaboratorsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto mt-5 px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            icon={<IconUsers className="text-blue-600" />}
            label="Colaboradores"
            value="0"
          />
          <StatCard
            icon={<IconDollar className="text-emerald-500" />}
            label="Folha Total"
            value="R$ 0,00"
          />
          <StatCard
            icon={<IconTrending className="text-orange-500" />}
            label="Adicionais"
            value="R$ 0,00"
          />
        </div>

        <CollaboratorForm />
        <CollaboratorList />
      </main>

      <Footer />
    </div>
  )
}