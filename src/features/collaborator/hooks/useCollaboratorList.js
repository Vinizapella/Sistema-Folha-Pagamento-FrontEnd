import { useState, useEffect } from 'react'
import { collaboratorService } from '../services/collaboratorService'

export function useCollaboratorList() {
  const [collaborators, setCollaborators] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCollaborators = async () => {
    try {
      setLoading(true)
      const data = await collaboratorService.listAll()
      setCollaborators(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Erro ao buscar no Java:", error)
      setCollaborators([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCollaborators()
  }, [])

  return { collaborators, loading, refresh: fetchCollaborators }
}