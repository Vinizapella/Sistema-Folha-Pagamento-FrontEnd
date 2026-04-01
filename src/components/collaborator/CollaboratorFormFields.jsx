import InputField from '../ui/InputField'

const ExtraFieldsLayout = ({ children }) => (
  <div className="bg-gray-100 p-6 rounded-2xl mb-6 border grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
    {children}
  </div>
)

export function CommissionFields({ formData, onChange }) {
  return (
    <ExtraFieldsLayout>
      <InputField 
        label="Total de Vendas (R$)" type="number"
        value={formData.totalSales}
        onChange={(e) => onChange('totalSales', e.target.value)}
      />
      <InputField 
        label="Percentual de Comissão (%)" type="number"
        value={formData.percentageCommission}
        onChange={(e) => onChange('percentageCommission', e.target.value)}
      />
    </ExtraFieldsLayout>
  )
}

export function ProductionFields({ formData, onChange }) {
  return (
    <ExtraFieldsLayout>
      <InputField 
        label="Valor por Peça (R$)" type="number"
        value={formData.valuePerPiece}
        onChange={(e) => onChange('valuePerPiece', e.target.value)}
      />
      <InputField 
        label="Quantidade Produzida" type="number"
        value={formData.quantityProduced}
        onChange={(e) => onChange('quantityProduced', e.target.value)}
      />
    </ExtraFieldsLayout>
  )
}