const API_URL = 'http://localhost:8080/api/collaborators';

export const collaboratorService = {
    async listAll() {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao listar colaboradores');
        return await response.json();
    },

    async register(collaboratorData) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(collaboratorData),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Erro ao cadastrar colaborador');
        }
        return await response.json();
    },

    delete: async (id) => {
    if (!id) throw new Error("ID não fornecido");
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        // Tenta ler a mensagem de erro que vem do Java
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erro ao deletar no servidor');
    }
    return true;
}
};