# Sispar (Front)

# 1. Introdução:

## Descrição geral do projeto

Este é o projeto final do curso de fullstack da Escola Vai na Web. Consiste num sistema de gerenciamento de reembolsos e tem como objetivo ser uma ferramenta de emissão de reembolsos. O usuário pode registrar e alterar informações referentes a reembolsos e submetê-los para sua aprovação.

## Funcionalidades do sistema:

- **Registro de transações**: inserção de dados como número do processo, data, valores, descrição e categoria.
- **Categorização**: classificação de despesas em categorias como alimentação, transporte, lazer, etc.

## Tecnologias utilizadas no back-end:

- **React**
- **SaSS**

## Objetivo da API:

- Sistema de emissão de reembolso.

# 2. EndPoints da API:

Documentação dos principais endpoints (incluindo método HTTP, URL, parâmetros, e exemplo de resposta).
Sistema de Cadastro de Colaboradores:
| Método | URL | Descrição |
| ------ | ---------------------------------------------------- | ----------------------------- |
| POST | /Cadastro | Cadastra colaboradores |
| GET | /todos-colaboradores | Lista colaboradores |
| PUT | /atualizar/<int:colaborador_id> | Atualiza o colaborador por id |
| DELETE | /deletar/<int:colaborador_id>| Remove o colaborador por id |
| POST | /login | Permite login no sistema |

Sistema de Cadastro de Reembolso:
| Método | URL | Descrição |
| ------ | ---------------------------------------------------- | ----------------------------- |
| POST | /solicitacao | Cadastra solicitação de reembolso |
| GET | /historico | Lista reembolsos |

# 3. Como rodar o projeto:

1- Copie o código na máquina local

2- Instala as dependências do projeto\
`npm install`

3- Ativa o ambiente\
`npm run dev`\

4- acesse o link pelo navegador para acessar as rotas do Swegger\
 http://localhost:5173/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
