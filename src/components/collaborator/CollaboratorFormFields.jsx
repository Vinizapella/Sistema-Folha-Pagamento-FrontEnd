import InputField from '../ui/InputField'

export function CommissionFields() {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl mb-6 border grid grid-cols-1 md:grid-cols-2 gap-5">
      <InputField 
        label="Total de Vendas (R$)" 
        placeholder="0,00" 
        type="number" 
      />
      <InputField 
        label="Percentual de Comissão (%)" 
        placeholder="0" 
        type="number" 
      />
    </div>
  )
}

export function ProductionFields() {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl mb-6 border grid grid-cols-1 md:grid-cols-2 gap-5">
      <InputField 
        label="Valor por Peça (R$)" 
        placeholder="0,00" 
        type="number" 
      />
      <InputField 
        label="Quantidade Produzida" 
        placeholder="0" 
        type="number" 
      />
    </div>
  )
}