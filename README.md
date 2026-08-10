# CENTRAL SENAC

Sistema web de gerenciamento de notícias desenvolvido como projeto final da disciplina de Tecnologia da Informação (TI).

O projeto foi desenvolvido utilizando **Node.js**, **Express**, **TypeScript** e arquitetura **MVC**, permitindo a visualização e o gerenciamento de notícias, categorias e usuários, além de possuir autenticação, controle de sessão e testes automatizados.

# Equipe

| Integrante | Função |
|---|---|
| Gabriel Costa | Líder do Projeto |
| José Luciano | Back-end |
| Mateus Vinícius | Front-end |
| Vitor Filgueira | QA / Testes |

# Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- EJS
- Jest
- ts-jest
- bcrypt
- express-session
- Multer

# Arquitetura

O projeto utiliza a arquitetura **MVC (Model-View-Controller)**.

### Model

Responsável pela representação das entidades e pelas regras básicas de validação.

- Usuario
- Categoria
- Noticia

### Controller

Responsável por receber as requisições HTTP e controlar o fluxo da aplicação.

- AuthController
- UsuarioController
- CategoriaController
- NoticiaController

### Repository

Responsável pelo armazenamento e manipulação dos dados durante a execução da aplicação.

- UsuarioRepository
- CategoriaRepository
- NoticiaRepository

### Views

Interfaces da aplicação desenvolvidas utilizando **EJS**.

- Login
- Cadastro
- Usuários
- Categorias
- Notícias

# Estrutura do Projeto

```text
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
│   ├── types
│   ├── views
│   ├── app.ts
│   └── server.ts
│
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
