URL Shortening API - Frontend
Um aplicativo web moderno para encurtamento de URLs com interface responsiva e estatísticas avançadas.

https://img.shields.io/badge/React-18-blue
https://img.shields.io/badge/TypeScript-5.0-blue
https://img.shields.io/badge/Tailwind_CSS-3.0-purple
https://img.shields.io/badge/Vite-5.0-yellow

📋 Índice
Visão Geral

Funcionalidades

Tecnologias Utilizadas

Estrutura do Projeto

Instalação

Uso

Componentes

Estilização

Scripts Disponíveis

Responsividade

Contribuição

Licença

🎯 Visão Geral
Este projeto é um frontend para um serviço de encurtamento de URLs, desenvolvido com React e TypeScript. A aplicação permite que os usuários encurtem URLs longas, visualizem estatísticas de cliques e gerenciem seus links de forma eficiente.

✨ Funcionalidades
✅ Encurtamento de URLs em tempo real

✅ Interface responsiva para desktop e mobile

✅ Sistema de validação de URLs com Zod

✅ Estatísticas avançadas dos links

✅ Botão de copiar para área de transferência

✅ Menu hamburguer para dispositivos móveis

✅ Design moderno com Tailwind CSS

✅ Fontes personalizadas (Poppins)

✅ Temas de cores customizáveis

✅ Componentes reutilizáveis

🛠️ Tecnologias Utilizadas
React 18 - Biblioteca para construção de interfaces

TypeScript - Tipagem estática para JavaScript

Tailwind CSS 3.0 - Framework CSS utilitário

Vite - Build tool e dev server

React Hook Form - Gerenciamento de formulários

Zod - Validação de esquemas TypeScript-first

ESLint - Linting e padronização de código

📁 Estrutura do Projeto
text
URL-SHORTENING-API/
├── public/
│   ├── fonts/
│   │   ├── Aa Poppins-Bold.ttf
│   │   └── Aa Poppins-Regular.ttf
│   └── images/
│       ├── bg-boost-desktop.svg
│       ├── bg-boost-mobile.svg
│       ├── bg-shorten-desktop.svg
│       ├── bg-shorten-mobile.svg
│       └── ... (outras imagens)
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── LineCyan/
│   │   ├── Main/
│   │   ├── NavLinks/
│   │   ├── PromoBanner/
│   │   ├── Statisystems/
│   │   └── Statiscts/
│   ├── mocks/
│   │   └── TS_statics.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── eslint.config.js
└── index.html
🚀 Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/url-shortening-api.git
cd url-shortening-api
Instale as dependências:

bash
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash
npm run dev
# ou
yarn dev
Acesse http://localhost:5173 no seu navegador.

💻 Uso
Encurtar uma URL:

Digite a URL longa no campo de entrada

Clique em "Shorten It"

Copie a URL encurtada clicando no botão "Copy"

Visualizar estatísticas:

Role para baixo para ver as estatísticas avançadas

Visualize os dados de reconhecimento de marca, registros detalhados e personalização

Navegação móvel:

Clique no ícone de menu hamburguer no canto superior direito

Acesse todas as funcionalidades do menu

🧩 Componentes Principais
Header
Componente de cabeçalho responsivo com menu hamburguer para mobile.

Input
Formulário de encurtamento de URLs com validação em tempo real.

MainContent
Componente principal contendo a seção hero e o conteúdo inicial.

Statiscts
Exibe as estatísticas avançadas com cards informativos.

PromoBanner
Banner promocional com call-to-action.

Footer
Rodapé com links de navegação e redes sociais.

🎨 Estilização
Temas de Cores
css
--color-primary-cyan: hsl(180, 66%, 49%)
--color-primary-violet-dark: hsl(257, 27%, 26%)
--color-secondary-red: hsl(0, 87%, 67%)
--color-neutral-gray-light: hsl(0, 0%, 75%)
--color-neutral-gray: hsl(257, 7%, 63%)
--color-neutral-gray-dark: hsl(255, 11%, 22%)
--color-neutral-gray-very-dark: hsl(260, 8%, 14%)
Fontes
Poppins Regular (500) - Para texto normal

Poppins Bold (700) - Para títulos e ênfase

Classes Utilitárias
base-bg - Estilos base para backgrounds

item-center - Centralização flexível

social-icon - Estilos para ícones sociais

list-item - Estilos para itens de lista

error-message - Estilos para mensagens de erro

📜 Scripts Disponíveis
npm run dev - Inicia o servidor de desenvolvimento

npm run build - Cria a build de produção

npm run preview - Visualiza a build de produção

npm run lint - Executa o linter ESLint

📱 Responsividade
A aplicação é totalmente responsiva com breakpoints:

Desktop: ≥1440px

Tablet: 936px - 1440px

Mobile: <936px

Recursos Responsivos
Menu hamburguer para mobile

Layout flexível de cards

Imagens otimizadas

Textos redimensionáveis

Backgrounds específicos por dispositivo

🤝 Contribuição
Fork o projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📞 Contato
Seu Nome - @Vineeeee
E-mail: vinimassaroli@hotmail.com

Link do Projeto: [https://github.com/seu-usuario/url-shortening-api](https://github.com/Vineeeee/url-shortenung-api/)

⭐️ Se este projeto te ajudou, considere dar uma estrela no GitHub!
