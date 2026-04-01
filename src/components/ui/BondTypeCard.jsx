function BondTypeCard({ icon, title, description, selected, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className={`flex items-start gap-3 border-2 rounded-lg p-3 cursor-pointer transition-all ${
        selected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-200'
      }`}
    >
      <input 
        type="radio" 
        checked={selected} 
        readOnly 
        className="accent-blue-600 mt-1" 
      />

      <span className="text-lg text-gray-600">{icon}</span>

      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default BondTypeCard