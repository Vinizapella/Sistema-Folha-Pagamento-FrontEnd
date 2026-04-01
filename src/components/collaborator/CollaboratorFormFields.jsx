import InputField from '../ui/InputField'

export function CommissionFields({ formData, onChange }) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl mb-6 border grid grid-cols-1 md:grid-cols-2 gap-5">
      <InputField 
        label="Total de Vendas (R$)" 
        type="number"
        value={formData.totalSales}
        onChange={(e) => onChange('totalSales', e.target.value)}
      />
      <InputField 
        label="Percentual de Comissão (%)" 
        type="number"
        value={formData.percentageCommission}
        onChange={(e) => onChange('percentageCommission', e.target.value)}
      />
    </div>
  )
}

export function ProductionFields({ formData, onChange }) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl mb-6 border grid grid-cols-1 md:grid-cols-2 gap-5">
      <InputField 
        label="Valor por Peça (R$)" 
        type="number"
        value={formData.valuePerPiece}
        onChange={(e) => onChange('valuePerPiece', e.target.value)}
      />
      <InputField 
        label="Quantidade Produzida" 
        type="number"
        value={formData.quantityProduced}
        onChange={(e) => onChange('quantityProduced', e.target.value)}
      />
    </div>
  )
}