import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StatCard from '../components/ui/StatCard'
import CollaboratorForm from '../features/collaborator/components/CollaboratorForm'
import CollaboratorList from '../features/collaborator/components/CollaboratorList'
import { IconUsers, IconDollar, IconTrending } from '../components/ui/Icons'
import { useCollaboratorList } from '../features/collaborator/hooks/useCollaboratorList'

export default function CollaboratorsPage() {
  const { collaborators, loading, refresh } = useCollaboratorList()

  const formatCurrency = (val) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0)

  const totalCollaborators = collaborators.length
  const totalPayroll = collaborators.reduce((acc, c) => acc + (c.finalSalary || 0), 0)
  const totalExtras = collaborators.reduce((acc, c) => acc + (c.extras || 0), 0)

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto mt-5 px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            icon={<IconUsers className="text-blue-600" />}
            label="Colaboradores"
            value={loading ? '...' : totalCollaborators}
          />
          <StatCard
            icon={<IconDollar className="text-emerald-500" />}
            label="Folha Total"
            value={loading ? '...' : formatCurrency(totalPayroll)}
          />
          <StatCard
            icon={<IconTrending className="text-orange-500" />}
            label="Adicionais"
            value={loading ? '...' : formatCurrency(totalExtras)}
          />
        </div>

        <CollaboratorForm onSuccess={refresh} />
        <CollaboratorList collaborators={collaborators} loading={loading} refresh={refresh} />
      </main>

      <Footer />
    </div>
  )
}