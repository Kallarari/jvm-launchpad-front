# JVM Launchpad - Frontend

Frontend do projeto JVM Launchpad desenvolvido com React, TypeScript e Vite, seguindo uma arquitetura hexagonal orientada a features para permitir que múltiplas squads trabalhem de forma independente e organizada.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Criando Novas Features](#criando-novas-features)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Principais Bibliotecas](#principais-bibliotecas)
- [Scripts Disponíveis](#scripts-disponíveis)

## 🎯 Sobre o Projeto

O JVM Launchpad é um projeto colaborativo que utiliza uma arquitetura hexagonal orientada a features, permitindo que diferentes squads desenvolvam funcionalidades de forma isolada e organizada. Cada feature possui sua própria estrutura completa, incluindo componentes, páginas, rotas e contextos, facilitando a manutenção e escalabilidade do projeto.

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **Git**

## 🚀 Instalação e Execução

### Passo 1: Clonar o Repositório

```bash
git clone <url-do-repositorio> front-jvm-launchpad
cd front-jvm-launchpad
```

### Passo 2: Instalar Dependências

```bash
npm install
```

ou

```bash
yarn install
```

ou

```bash
pnpm install
```

### Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```


### Passo 4: Executar o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

ou

```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

### Passo 5: Build para Produção

Para gerar o build de produção:

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 🏗️ Criando Novas Features

Siga este passo a passo para criar uma nova feature no projeto:

### Passo 1: Criar a Estrutura de Pastas

Crie a estrutura de pastas da nova feature dentro de `src/`:

```
src/
  feature-nome-da-feature/
    ├── router/
    │   └── index.tsx
    ├── pages/
    │   └── nome-da-pagina/
    │       ├── index.tsx
    │       ├── interface.ts
    │       ├── context.tsx
    │       └── styles.module.ts
    └── components/
        └── nome-do-componente/
            ├── index.tsx
            ├── interface.ts
            └── styles.ts
```

### Passo 2: Criar o Router da Feature

Crie o arquivo `src/feature-nome-da-feature/router/index.tsx`:

```tsx
import { Route, Routes } from 'react-router-dom';
import NomeDaPagina from '../pages/nome-da-pagina';

export const NomeDaFeatureRoutes = () => {
  return (
    <Routes>
      <Route path="/nome-da-rota" element={<NomeDaPagina />} />
    </Routes>
  );
};
```

### Passo 3: Criar a Página

Crie os arquivos da página em `src/feature-nome-da-feature/pages/nome-da-pagina/`:

**interface.ts:**
```tsx
export interface NomeDaPaginaProps {
  title?: string;
}

export interface NomeDaPaginaData {
  id: string;
  name: string;
}
```

**context.tsx:**
```tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { NomeDaPaginaData } from './interface';

interface NomeDaPaginaContextType {
  data: NomeDaPaginaData | null;
  setData: (data: NomeDaPaginaData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const NomeDaPaginaContext = createContext<NomeDaPaginaContextType | undefined>(undefined);

export const NomeDaPaginaProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<NomeDaPaginaData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <NomeDaPaginaContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </NomeDaPaginaContext.Provider>
  );
};

export const useNomeDaPaginaContext = () => {
  const context = useContext(NomeDaPaginaContext);
  if (context === undefined) {
    throw new Error('useNomeDaPaginaContext must be used within a NomeDaPaginaProvider');
  }
  return context;
};
```

**styles.module.ts:**
```tsx
import styled from 'styled-components';
import { theme } from '../../../infrastructure';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['4xl']};
  color: ${theme.colors.dark};
`;
```

**index.tsx:**
```tsx
import { NomeDaPaginaProvider, useNomeDaPaginaContext } from './context';
import { Container, Title } from './styles.module';

const NomeDaPaginaContent = () => {
  const { data, isLoading } = useNomeDaPaginaContext();

  return (
    <Container>
      <Title>Nome da Página</Title>
      {/* Seu conteúdo aqui */}
    </Container>
  );
};

const NomeDaPagina = () => {
  return (
    <NomeDaPaginaProvider>
      <NomeDaPaginaContent />
    </NomeDaPaginaProvider>
  );
};

export default NomeDaPagina;
```

### Passo 4: Criar Componentes (se necessário)

Crie os componentes em `src/feature-nome-da-feature/components/nome-do-componente/`:

**interface.ts:**
```tsx
export interface NomeDoComponenteProps {
  title?: string;
  onClick?: () => void;
}
```

**styles.ts:**
```tsx
import styled from 'styled-components';
import { theme } from '../../../infrastructure';

export const ComponentContainer = styled.div`
  padding: ${theme.spacing.md};
`;
```

**index.tsx:**
```tsx
import type { NomeDoComponenteProps } from './interface';
import { ComponentContainer } from './styles';

export const NomeDoComponente = ({ title, onClick }: NomeDoComponenteProps) => {
  return (
    <ComponentContainer>
      {/* Seu componente aqui */}
    </ComponentContainer>
  );
};
```

### Passo 5: Integrar o Router no Router Principal

Adicione a rota da nova feature no arquivo `src/router/index.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExampleRoutes } from '../feature-example/router';
import { NomeDaFeatureRoutes } from '../feature-nome-da-feature/router';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
        <Route path="/*" element={<ExampleRoutes />} />
        <Route path="/*" element={<NomeDaFeatureRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### Passo 6: Usar a API (se necessário)

Para fazer chamadas à API, importe o cliente axios configurado:

```tsx
import { api } from '../../../infrastructure';

// Exemplo de uso
const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};
```

### Passo 7: Usar o Estado Global (Zustand)

Para acessar e modificar o estado global da aplicação:

```tsx
import { useAppStore } from '../../../infrastructure';
import type { User, Squad } from '../../../infrastructure';

const MeuComponente = () => {
  // Acessar estado
  const { user, squad } = useAppStore();
  
  // Acessar actions
  const { setUser, setSquad } = useAppStore();

  // Exemplo de uso
  const handleLogin = async (userData: User) => {
    try {
      // Lógica de login
      setUser(userData);
    }
  };

  return (
    <div>
      {user && <p>Bem-vindo, {user.name}!</p>}
      {squad && <p>Squad: {squad.name}</p>}
    </div>
  );
};
```

### Passo 8: Usar Tipos Globais

Para usar os tipos globais (User, Squad, SquadMember):

```tsx
import type { User, Squad, SquadMember } from '../../../infrastructure';

// Exemplo em uma função
const processUser = (user: User) => {
  // Sua lógica aqui
};

// Exemplo em um componente
interface UserCardProps {
  user: User;
  squad?: Squad;
}
```

## 📐 Arquitetura do Projeto

O projeto segue uma **arquitetura hexagonal orientada a features**, onde:

- **`infrastructure/`**: Contém configurações compartilhadas como tema, API, tipos globais, estado global (Zustand) e utilitários
  - `types/`: Tipos TypeScript globais (User, Squad, SquadMember)
  - `store/`: Estado global gerenciado com Zustand
  - `theme/`: Tema padrão do projeto
  - `api/`: Configuração do cliente HTTP (Axios)
- **`feature-*/`**: Cada feature é um módulo independente com:
  - `router/`: Rotas específicas da feature
  - `pages/`: Páginas da feature (com context, interfaces e estilos)
  - `components/`: Componentes reutilizáveis da feature
- **`router/`**: Router principal que integra todas as features

### Estrutura de uma Feature

```
feature-nome/
├── router/
│   └── index.tsx          # Rotas da feature
├── pages/
│   └── nome-pagina/
│       ├── index.tsx      # Componente da página
│       ├── interface.ts   # Interfaces TypeScript
│       ├── context.tsx    # Contexto React
│       └── styles.module.ts # Estilos (styled-components com module)
└── components/
    └── nome-componente/
        ├── index.tsx      # Componente
        ├── interface.ts   # Interfaces TypeScript
        └── styles.ts      # Estilos (styled-components sem module)
```

## 📚 Principais Bibliotecas

### Core

- **[React](https://react.dev/)** (v19.2.0) - Biblioteca para construção de interfaces
  - [Documentação](https://react.dev/)
  - [React Router DOM](https://reactrouter.com/) (v7.10.1) - Roteamento
    - [Documentação](https://reactrouter.com/en/main)

### Estilização

- **[Styled Components](https://styled-components.com/)** (v6.1.19) - CSS-in-JS
  - [Documentação](https://styled-components.com/docs)

### HTTP Client

- **[Axios](https://axios-http.com/)** (v1.13.2) - Cliente HTTP
  - [Documentação](https://axios-http.com/docs/intro)

### Validação e Estado

- **[Zod](https://zod.dev/)** (v4.2.1) - Validação de schemas TypeScript-first
  - [Documentação](https://zod.dev/)
- **[Zustand](https://zustand-demo.pmnd.rs/)** (v5.0.9) - Gerenciamento de estado leve
  - [Documentação](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Gráficos

- **[ECharts](https://echarts.apache.org/)** (v6.0.0) - Biblioteca de visualização de dados
  - [Documentação](https://echarts.apache.org/handbook/pt/get-started/)

### Ícones

- **[@iconify/react](https://iconify.design/)** (v6.0.2) - Ícones
  - [Documentação](https://iconify.design/docs/usage/react/)

### Build e Desenvolvimento

- **[Vite](https://vite.dev/)** (v7.2.4) - Build tool e dev server
  - [Documentação](https://vite.dev/)
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Superset do JavaScript
  - [Documentação](https://www.typescriptlang.org/docs/)

### Testes

- **[Vitest](https://vitest.dev/)** (v4.0.16) - Framework de testes
  - [Documentação](https://vitest.dev/)
- **[Testing Library](https://testing-library.com/)** (v16.3.1) - Utilitários para testes
  - [Documentação](https://testing-library.com/docs/react-testing-library/intro/)

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes

## 🤝 Contribuindo

Este é um projeto colaborativo. Ao criar uma nova feature:

1. Siga a estrutura de pastas estabelecida
2. Use TypeScript para tipagem
3. Utilize styled-components para estilização
4. Mantenha os componentes e páginas organizados conforme o padrão
5. Documente funcionalidades complexas

## 📝 Notas Importantes

- O tema do projeto está centralizado em `src/infrastructure/theme/`
- A configuração da API está em `src/infrastructure/api/config.ts`
- Os tipos globais (User, Squad, SquadMember) estão em `src/infrastructure/types/`
- O estado global (Zustand) está em `src/infrastructure/store/` e pode ser acessado via `useAppStore()`
- Use `styles.module.ts` para estilos de páginas
- Use `styles.ts` (sem module) para estilos de componentes
- Sempre crie interfaces TypeScript para props e dados
- Utilize contextos React para gerenciamento de estado local da feature
- Use o estado global (Zustand) para dados que precisam ser compartilhados entre múltiplas features
- Para dados específicos de uma feature, prefira usar Context API local

---
