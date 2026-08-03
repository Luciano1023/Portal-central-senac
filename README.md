# CENTRAL SENAC

Sistema web de gerenciamento de notícias desenvolvido como projeto final da disciplina de Tecnologia da Informação (TI).

O projeto foi desenvolvido utilizando **Node.js**, **Express**, **TypeScript** e arquitetura **MVC**, permitindo o gerenciamento de usuários, categorias e notícias, além de possuir autenticação e testes automatizados.

---

# Equipe

| Integrante | Função |
|------------|---------|
| Gabriel Costa | Líder do Projeto |
| José Luciano | Back-end |
| Mateus Vinícius | Front-end |
| Vitor Filgueira | QA / Testes |

---

# Tecnologias Utilizadas

Node.js
TypeScript
Express.js
EJS
Jest
ts-jest

---

# Estrutura do Projeto

Portal-central-senac
│
├── src
│   ├── __tests__
│   ├── config
│   ├── Controller
│   ├── data
│   ├── middlewares
│   ├── Models
│   ├── Partials
│   ├── Public
│   ├── Repositories
│   ├── routes
│   ├── uploads
│   ├── views
│   ├── app.ts
│   └── server.ts
│
├── package.json
├── tsconfig.json
└── README.md

---

# Funcionalidades

O sistema possui funcionalidades para gerenciamento de um portal de notícias, incluindo:

Autenticação de usuários
Cadastro de usuários
Cadastro de categorias
Cadastro de notícias
Listagem de usuários
Listagem de categorias
Listagem de notícias
Upload de imagens
Organização em arquitetura MVC
Persistência de dados em arquivos JSON
Testes automatizados

---

# Testes Automatizados

Os testes foram desenvolvidos utilizando **Jest**.

Atualmente o projeto possui testes para:

Categoria
Notícia
Usuário
CategoriaRepository
NoticiaRepository
UsuarioRepository

Todos os testes encontram-se na pasta:

src/__tests__

---

# Organização do Projeto

O projeto segue a arquitetura **MVC (Model-View-Controller)**.

### Models

Responsáveis pelas regras de negócio e representação das entidades.

Usuario
Categoria
Noticia

### Controllers

Responsáveis por receber as requisições HTTP e controlar o fluxo da aplicação.

AuthController
CategoriaController
ReceitaController
UsuarioController

### Repositories

Responsáveis pelo acesso e manipulação dos dados.

UsuarioRepository
CategoriaRepository
ReceitaRepository

### Views

Interfaces da aplicação utilizando **EJS**.

Login
Cadastro
Usuários
Categorias
Notícias

---

# Como executar o projeto

Clone o repositório:

bash
git clone https://github.com/Luciano1023/Portal-central-senac.git

Entre na pasta:

bash
cd Portal-central-senac

Instale as dependências:

bash
npm install

Inicie o servidor:

bash
npm run dev

---

# Executando os testes

bash
npm test
---

# Dependências

### Produção

Express

### Desenvolvimento

Jest
ts-jest
TypeScript
@types/node
@types/express
@types/jest

---

# Melhorias Futuras

Banco de dados relacional
Sistema de permissões
Paginação das notícias
Pesquisa por título
Filtro por categoria
Interface responsiva
Dashboard administrativo
Cobertura de testes ampliada

---

# Licença

Projeto desenvolvido para fins acadêmicos como atividade da disciplina de Tecnologia da Informação (TI).

---

# Agradecimentos

Projeto desenvolvido em equipe durante o curso, aplicando conceitos de:

Programação Orientada a Objetos
Arquitetura MVC
Express.js
TypeScript
Testes Automatizados
Versionamento com Git e GitHub
