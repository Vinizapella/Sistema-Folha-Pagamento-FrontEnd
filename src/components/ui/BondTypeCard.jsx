function BondTypeCard({ icon, title, description, selected }) {

  return (

<div className={`flex items-start gap-3 border-2 rounded-lg p-3 cursor-pointer ${selected ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>

      <input type="radio" checked={selected} readOnly className="accent-blue-600" />

      <span className="text-lg">{icon}</span>

      <div>

        <p className="text-sm font-medium text-gray-800">{title}</p>

        <p className="text-xs text-gray-500">{description}</p>

      </div>

    </div>

  )
  
}

export default BondTypeCard