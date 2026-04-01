import { useState } from 'react'
import { collaboratorService } from '../services/collaboratorService'

export function useCollaboratorForm() {
  const initialState = {
    bond_type: 'STANDARD',
    registrationNumber: '',
    name: '',
    totalSales: '',
    percentageCommission: '',
    valuePerPiece: '',
    quantityProduced: ''
  }

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const regNumber = Number(formData.registrationNumber)
    if (!formData.name.trim() || regNumber <= 0) {
      return alert("Verifique os campos obrigatórios!")
    }

    setLoading(true)

    let payload = {
      bond_type: formData.bond_type,
      registrationNumber: regNumber,
      name: formData.name.trim()
    }

    if (formData.bond_type === 'COMMISSIONED') {
      payload.totalSales = Number(formData.totalSales) || 0
      payload.percentageCommission = Number(formData.percentageCommission) || 0
    } else if (formData.bond_type === 'PRODUCTION') {
      payload.valuePerPiece = Number(formData.valuePerPiece) || 0
      payload.quantityProduced = Number(formData.quantityProduced) || 0
    }

    try {
      await collaboratorService.register(payload)
      alert("Sucesso!")
      setFormData(initialState)
    } catch (error) {
      alert("Erro: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return { formData, loading, handleInputChange, handleSubmit }
}