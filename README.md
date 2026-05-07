# 🎨 Sistema Folha de Pagamento - Frontend

> **Unisociesc** — Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas  
> **UC:** Algoritmos e Programação  
> **Avaliação:** A3 — Projeto 1  
> **Período:** 1º Semestre  
> **Aluno:** Vinicius dos Santos Zapella

---

## 📋 Sobre o Projeto

Interface web moderna e responsiva para o gerenciamento de folha de pagamento, desenvolvida com **React 18 + Vite + Tailwind CSS**.

A aplicação oferece uma experiência intuitiva para gerenciar colaboradores de três tipos diferentes, calculando automaticamente seus salários com base em diferentes critérios.

---

## ✨ Funcionalidades

### ✅ Colaboradores
- **Visualizar** lista completa de colaboradores com seus salários calculados
- **Cadastrar** novos colaboradores (3 tipos: Padrão, Comissionado, Produção)
- **Atualizar** dados de um colaborador existente
- **Deletar** colaboradores (com confirmação)
- **Buscar** folha de pagamento total em tempo real

### 🎯 Tipos de Colaboradores
- **Padrão** — Recebe apenas o salário base
- **Comissionado** — Salário base + comissão sobre vendas
- **Produção** — Salário base + bônus por peças produzidas

### 📊 Dashboard
- Exibição clara do salário base e extras
- Total de folha de pagamento calculado automaticamente
- Interface responsiva (desktop e mobile)
- Indicadores visuais de tipo de vínculo

---

## 🏗️ Estrutura do Projeto

```
Sistema-Folha-Pagamento-FrontEnd/
│
├── src/
│   ├── components/               # Componentes reutilizáveis
│   │   └── ui/                   # Ícones e componentes UI
│   │
│   ├── features/                 # Funcionalidades principais
│   │   └── collaborator/
│   │       ├── components/       # Componentes de colaborador
│   │       │   ├── CollaboratorList.jsx        # Lista com CRUD
│   │       │   ├── CollaboratorForm.jsx        # Formulário
│   │       │   └── CollaboratorFormFields.jsx  # Campos do formulário
│   │       │
│   │       ├── hooks/            # Custom hooks React
│   │       │   ├── useCollaboratorList.js      # Gerencia listagem
│   │       │   └── useCollaboratorForm.js      # Gerencia formulário
│   │       │
│   │       └── services/         # Chamadas à API
│   │           └── collaboratorService.js      # Requisições HTTP
│   │
│   ├── pages/                    # Páginas da aplicação
│   │   └── CollaboratorsPage.jsx # Página principal
│   │
│   ├── App.jsx                   # Componente raiz
│   └── main.jsx                  # Ponto de entrada
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Tecnologias

### Frontend
- **React 18** — Biblioteca UI
- **Vite** — Build tool e dev server
- **Tailwind CSS** — Estilização utilitária
- **JavaScript ES6+** — Linguagem

### HTTP & State Management
- **Fetch API** — Requisições HTTP
- **React Hooks** — State e side effects
- **Custom Hooks** — Lógica reutilizável

### Desenvolvimento
- **ESLint** — Linting
- **npm** — Gerenciamento de dependências

---

## 🎨 Componentes Principais

### `CollaboratorList.jsx`
Exibe a lista de colaboradores com:
- Tabela responsiva (desktop) / Cards (mobile)
- Botão de delete com confirmação
- Cálculo automático da folha total
- Indicador de tipo de vínculo com cores

### `CollaboratorForm.jsx`
Formulário para criar/editar colaboradores:
- Validação de campos
- Campos dinâmicos por tipo de vínculo
- Feedback visual de sucesso/erro
- Reset automático após envio

### `useCollaboratorList.js`
Hook personalizado que:
- Busca lista de colaboradores
- Gerencia estado de carregamento
- Trata erros com graciosidade
- Oferece função refresh()

### `useCollaboratorForm.js`
Hook personalizado que:
- Valida formulário
- Envia dados ao backend
- Trata erros da API
- Oferece callbacks de sucesso/erro

### `collaboratorService.js`
Serviço de API que:
- Lista colaboradores: `GET /api/collaborators`
- Cadastra novo: `POST /api/collaborators`
- Atualiza: `PUT /api/collaborators/{id}`
- Deleta: `DELETE /api/collaborators/{id}`

---

## 🔗 Integração com Backend

### URL Base
```javascript
const API_URL = 'http://localhost:8080/api/collaborators';
```

### Headers
```javascript
headers: { 'Content-Type': 'application/json' }
```

### CORS
O backend está configurado com `@CrossOrigin(origins = "*")` para aceitar requisições do frontend.

### Exemplo de Fluxo Completo

```javascript
// 1. Buscar colaboradores
GET /api/collaborators
Resposta: [
  {
    "id": 1,
    "name": "João Silva",
    "registrationNumber": 1,
    "baseSalary": 2000.0,
    "extras": 0.0,
    "finalSalary": 2000.0,
    "bond_type": "STANDARD"
  }
]

// 2. Deletar colaborador
DELETE /api/collaborators/1
Resposta: 204 No Content

// 3. Página recarrega lista
GET /api/collaborators
Resposta: [] (vazio ou sem o colaborador deletado)
```

---

## 💾 Instalação e Execução

### Pré-requisitos
- **Node.js 16+** e **npm** (ou yarn/pnpm)
- **Backend rodando** em `http://localhost:8080`

### Instalação

```bash
# Clonar repositório
git clone https://github.com/Vinizapella/Sistema-Folha-Pagamento.git

# Acessar pasta do frontend
cd Sistema-Folha-Pagamento-FrontEnd

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar dev server com HMR (Hot Module Replacement)
npm run dev
```

Acesse: `http://localhost:5173`

### Build para Produção

```bash
# Compilar para produção
npm run build

# Preview da build
npm run preview
```

---

## 📝 Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build otimizado para produção |
| `npm run preview` | Preview da build produção |
| `npm run lint` | Executa ESLint |

---

## 🎯 Fluxo de Uso - Passo a Passo

### 1. Visualizar Colaboradores
```
1. Aplicação carrega
2. useCollaboratorList executa fetch
3. Lista de colaboradores aparece com salários calculados
```

### 2. Cadastrar Novo Colaborador
```
1. Preencher formulário com dados
2. Selecionar tipo de vínculo
3. Campos específicos aparecem dinamicamente
4. Clicar em "Cadastrar"
5. Formulário envia dados ao backend
6. Lista atualiza automaticamente
7. Feedback de sucesso aparece
```

### 3. Atualizar Colaborador
```
1. Clicar em editar (se implementado)
2. Formulário preenche com dados atuais
3. Modificar dados
4. Clicar em "Atualizar"
5. Backend retorna dados atualizados
6. Lista é refrescada
```

### 4. Deletar Colaborador
```
1. Clicar no ícone de lixeira
2. Confirmar exclusão no popup
3. Requisição DELETE é enviada
4. Backend retorna 204 No Content
5. Colaborador desaparece da lista
6. Feedback visual de sucesso
```

---

## 🎨 Design System

### Cores
- **Primária** — Azul (`text-blue-600`, `bg-blue-50`)
- **Sucesso** — Verde (`text-green-500`)
- **Aviso** — Amarelo (`text-yellow-500`)
- **Erro** — Vermelho (`text-red-500`)
- **Neutro** — Cinza (`text-gray-*`)

### Tipografia
- **Títulos** — Font-weight bold
- **Corpo** — Font-weight normal
- **Pequeno** — Tamanho `text-xs`

### Layout
- **Container** — Width 100%, padding responsivo
- **Cards** — Borda 2px, sombra suave, border-radius
- **Botões** — Padding uniforme, transição suave

---

## ⚠️ Tratamento de Erros

### Erro de Conexão
```javascript
catch (error) {
  console.error("Erro ao buscar no Java:", error)
  setCollaborators([])
}
```

### Erro de Delete
```javascript
catch (error) {
  alert('Erro ao excluir: ' + error.message)
}
```

### Erro de Formulário
```javascript
catch (error) {
  const errorMessage = error.message || 'Erro ao cadastrar colaborador'
  // Exibir ao usuário
}
```

---

## 📱 Responsividade

### Desktop
- Layout em tabela (mais dados visíveis)
- 4 colunas: Nome, Vínculo, Detalhes, Ação

### Tablet & Mobile
- Layout em cards (um por linha)
- Informações empilhadas verticalmente
- Botões maiores para toque

### Breakpoints
- `md:` — Mudança de cards para tabela

---

## 🔧 Configurações Importantes

### URL do Backend
Se o backend está em outra URL, atualize em `collaboratorService.js`:

```javascript
const API_URL = 'http://seu-backend:8080/api/collaborators';
```

### Timeout de Requisições
Padrão é o timeout do navegador (~30s). Para customizar, use:

```javascript
const response = await fetch(url, {
  method: 'DELETE',
  signal: AbortSignal.timeout(5000) // 5 segundos
});
```

---

## 📚 Conceitos React Utilizados

- **Functional Components** — Componentes baseados em funções
- **Hooks** — `useState`, `useEffect`, `useCallback`
- **Custom Hooks** — Lógica reutilizável em `useCollaboratorList` e `useCollaboratorForm`
- **Controlled Components** — Inputs controlados pelo React
- **Event Handling** — onClick, onChange, onSubmit
- **Conditional Rendering** — `? :` e `&&`
- **List Rendering** — `.map()` para renderizar listas
- **Promises & Async/Await** — Requisições HTTP

---

## 🐛 Debugging

### Console do Navegador
```javascript
console.log('Colaboradores:', collaborators)
console.log(id); // Antes de deletar
```

### DevTools do React
- Instale a extensão "React Developer Tools"
- Inspecione componentes e props

### Network Tab
- Abra DevTools → Network
- Veja requisições HTTP e respostas

---

## 🚀 Melhorias Futuras

- [ ] Adicionar filtros e busca
- [ ] Exportar relatório em PDF
- [ ] Edição inline de dados
- [ ] Paginação para grandes listas
- [ ] Temas (light/dark mode)
- [ ] Autenticação de usuário
- [ ] Histórico de alterações


---

*Desenvolvido por **Vinicius dos Santos Zapella***

