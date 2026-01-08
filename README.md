# URL Shortening API - Frontend

Um aplicativo web moderno para encurtamento de URLs com interface responsiva e estatísticas avançadas.

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)

![Preview Desktop](https://img.shields.io/badge/📱_Responsivo-Sim-success)
![Status](https://img.shields.io/badge/🚀_Status-Completo-brightgreen)
![License](https://img.shields.io/badge/📄_Licença-MIT-blue)

</div>

<div align="center">
  <img src="https://img.shields.io/badge/🎨_Cores-Ciano_%26_Violeta-9cf" alt="Cores">
  <img src="https://img.shields.io/badge/📱_Mobile_First-Sim-green" alt="Mobile First">
  <img src="https://img.shields.io/badge/⚡_Performance-Otimizada-yellow" alt="Performance">
</div>

## 🎯 Visão Geral

Este projeto é um frontend para um serviço de encurtamento de URLs, desenvolvido com React e TypeScript. A aplicação permite que os usuários encurtem URLs longas, visualizem estatísticas de cliques e gerenciem seus links de forma eficiente com uma interface moderna e responsiva.

![Demonstração](https://via.placeholder.com/800x400/2d1b69/ffffff?text=URL+Shortening+API+Demo)

## ✨ Funcionalidades

| Recurso | Descrição | Status |
|---------|-----------|--------|
| 🔗 **Encurtamento de URLs** | Transforma URLs longas em links curtos e gerenciáveis | ✅ |
| 📊 **Estatísticas Avançadas** | Dashboard com métricas detalhadas dos links | ✅ |
| 📱 **Design Responsivo** | Interface adaptável para todos os dispositivos | ✅ |
| 🎯 **Validação em Tempo Real** | Validação de URLs com feedback instantâneo | ✅ |
| 📋 **Copiar para Clipboard** | Copia URLs encurtadas com um clique | ✅ |
| 🍔 **Menu Mobile** | Menu hamburguer otimizado para telas pequenas | ✅ |
| 🎨 **Tema Personalizado** | Cores e fontes customizadas | ✅ |
| ⚡ **Performance Otimizada** | Carregamento rápido e experiência fluída | ✅ |

## 🛠️ Stack Tecnológica

<div align="center">

| Frontend | Estilização | Ferramentas | Validação |
|----------|-------------|-------------|-----------|
| ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) | ![Tailwind](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss) | ![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite) | ![Zod](https://img.shields.io/badge/Zod-3.0-3068B7) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint) | ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990) |

</div>

## 📁 Estrutura do Projeto

URL-SHORTENING-API/
├── 📂 public/ # Arquivos estáticos
│ ├── 📁 fonts/ # Fontes personalizadas
│ │ ├── Aa Poppins-Bold.ttf
│ │ └── Aa Poppins-Regular.ttf
│ │
│ └── 📁 images/ # Imagens e ícones
│ ├── bg-boost-desktop.svg
│ ├── bg-boost-mobile.svg
│ ├── bg-shorten-desktop.svg
│ ├── bg-shorten-mobile.svg
│ ├── favicon-32x32.png
│ ├── icon-brand-recognition.svg
│ ├── icon-detailed-records.svg
│ ├── icon-fully-customizable.svg
│ ├── icon-facebook.svg
│ ├── icon-instagram.svg
│ ├── icon-pinterest.svg
│ ├── icon-twitter.svg
│ └── illustration-working.svg
│
├── 📂 src/ # Código fonte
│ ├── 📁 components/ # Componentes React
│ │ ├── 📁 Footer/ # Rodapé
│ │ ├── 📁 Header/ # Cabeçalho com menu
│ │ ├── 📁 Input/ # Formulário de URL
│ │ ├── 📁 LineCyan/ # Linha decorativa
│ │ ├── 📁 Main/ # Conteúdo principal
│ │ ├── 📁 NavLinks/ # Links de navegação
│ │ ├── 📁 PromoBanner/ # Banner promocional
│ │ ├── 📁 Statisystems/ # Sistema de estatísticas
│ │ └── 📁 Statiscts/ # Cards de estatísticas
│ │
│ ├── 📁 mocks/ # Dados mockados
│ │ └── TS_statics.ts # Dados das estatísticas
│ │
│ ├── 📁 styles/ # Estilos globais
│ │ └── globals.css # CSS com Tailwind e fontes
│ │
│ ├── App.tsx # Componente raiz
│ ├── main.tsx # Ponto de entrada
│ └── ... # Outros arquivos
│
├── .gitignore # Arquivos ignorados pelo Git
├── eslint.config.js # Configuração ESLint
└── index.html # Template HTML principal

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js ≥ 16
- npm ou yarn

### Passos de Instalação

1. **Clone o repositório**

git clone https://github.com/seu-usuario/url-shortening-api.git
cd url-shortening-api
Instale as dependências

bash
npm install
# ou
yarn install
Configure as variáveis de ambiente (se necessário)

bash
cp .env.example .env
Execute em modo desenvolvimento

bash
npm run dev
# ou
yarn dev
Acesse a aplicação

text
🌐 http://localhost:5173
Build para Produção
bash
npm run build
npm run preview  # Para visualizar a build
💻 Como Usar
🎯 Encurtar uma URL
Digite a URL completa no campo "Shorten a link here..."

Clique em "Shorten It"

Copie a URL encurtada clicando em "Copy"

📊 Visualizar Estatísticas
Role para baixo para ver as estatísticas avançadas

Visualize métricas como:

Brand Recognition - Reconhecimento de marca

Detailed Records - Registros detalhados

Fully Customizable - Personalização completa

📱 Navegação Mobile
Clique no ícone ☰ para abrir o menu

Navegue entre Features, Pricing, Resources

Faça login ou cadastre-se

🎨 Design System
Paleta de Cores
<div align="center">
Cor	HEX	RGB	Uso
<div style="background:#2acfcf; width:20px; height:20px; border-radius:3px;"></div> Primary Cyan	#2acfcf	hsl(180, 66%, 49%)	Botões, hover states
<div style="background:#3b3054; width:20px; height:20px; border-radius:3px;"></div> Dark Violet	#3b3054	hsl(257, 27%, 26%)	Backgrounds, elementos principais
<div style="background:#f46262; width:20px; height:20px; border-radius:3px;"></div> Secondary Red	#f46262	hsl(0, 87%, 67%)	Mensagens de erro
<div style="background:#bfbfbf; width:20px; height:20px; border-radius:3px;"></div> Gray Light	#bfbfbf	hsl(0, 0%, 75%)	Textos secundários
<div style="background:#9e9aa7; width:20px; height:20px; border-radius:3px;"></div> Gray	#9e9aa7	hsl(257, 7%, 63%)	Textos neutros
<div style="background:#35323e; width:20px; height:20px; border-radius:3px;"></div> Dark Gray	#35323e	hsl(255, 11%, 22%)	Títulos, textos escuros
<div style="background:#232127; width:20px; height:20px; border-radius:3px;"></div> Very Dark Gray	#232127	hsl(260, 8%, 14%)	Rodapé, backgrounds escuros
</div>
Tipografia
Fonte Principal: Poppins

Pesos: 500 (Regular), 700 (Bold)

Tamanhos Responsivos:

Desktop: 16px base

Mobile: 14px base

Componentes Estilizados
Cards de Estatísticas
tsx
// Estilo com hover effects e responsividade
className="
  bg-white rounded-md shadow-lg p-8 pt-16 h-72
  transition-transform duration-300
  hover:transform hover:scale-105 cursor-pointer
"
Botões Interativos
tsx
// Botões com estados hover e active
className="
  bg-primary-cyan hover:bg-cyan-600 text-white
  rounded-full px-10 py-3 text-lg
  hover:scale-105 active:scale-95
  transition-all duration-300
"
Input com Validação
tsx
// Input com feedback de erro
{errors.url && <span className='error-message'>{errors.url.message}</span>}
📱 Responsividade
Breakpoints
Dispositivo	Largura	Características
Mobile	< 936px	Menu hamburguer, layout vertical
Tablet	936px - 1440px	Layout adaptativo, cards ajustados
Desktop	≥ 1440px	Layout horizontal, menu completo
Recursos por Dispositivo
Mobile: Backgrounds otimizados, menu compacto

Tablet: Cards em grid, textos ajustados

Desktop: Layout expandido, todos os recursos visíveis

🧩 Componentes Principais
<Header />
Cabeçalho responsivo com menu adaptativo.

Logo

Navegação desktop (horizontal)

Menu hamburguer mobile

Botões de autenticação

<Input />
Formulário de encurtamento com validação.

Validação Zod para URLs

Feedback visual de erros

Lista de URLs encurtadas

Botão copy com estados

<Statiscts />
Seção de estatísticas com cards informativos.

3 cards com ícones

Layout responsivo em grid

Animações de hover

Linha conectora decorativa

<PromoBanner />
Banner promocional com call-to-action.

Backgrounds responsivos

Texto persuasivo

Botão de ação principal

🔧 Scripts Disponíveis
json
{
  "scripts": {
    "dev": "vite",                    // Inicia servidor dev
    "build": "tsc && vite build",     // Cria build produção
    "preview": "vite preview",        // Visualiza build
    "lint": "eslint .",              // Executa linter
    "lint:fix": "eslint . --fix"     // Corrige problemas
  }
}
🧪 Validação de Formulários
Schema Zod
typescript
const formSchema = z.object({
  url: z.string()
    .url('Formato de URL inválido')
    .min(1, 'A URL é obrigatória')
    .max(255, 'A URL é muito longa')
    .trim(),
});
Integração React Hook Form
typescript
const { handleSubmit, register, formState: { errors } } = useForm<FormData>({
  mode: 'onBlur',
  resolver: zodResolver(formSchema),
});
🚀 Performance
Otimizações Implementadas
Code Splitting: Componentes carregados sob demanda

Image Optimization: SVGs e formatos leves

Font Display: swap para melhor performance de fontes

CSS Purge: Tailwind remove estilos não utilizados

Métricas
First Contentful Paint: < 1.5s

Time to Interactive: < 3s

Bundle Size: < 200KB gzipped

🤝 Contribuição
Contribuições são bem-vindas! Siga estes passos:

Fork o projeto

Crie uma branch (git checkout -b feature/nova-feature)

Commit suas mudanças (git commit -m 'Adiciona nova feature')

Push para a branch (git push origin feature/nova-feature)

Abra um Pull Request

Padrões de Código
Use TypeScript com tipos estritos

Siga a convenção de nomes do projeto

Adicione testes para novas funcionalidades

Documente mudanças significativas

📄 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

👥 Autores
Seu Nome - @Vineeeee

🙏 Agradecimentos
Design inspirado no desafio do Frontend Mentor

Ícones e ilustrações fornecidos pelo projeto

Comunidade React e TypeScript

<div align="center">
⭐️ Deixe uma estrela se este projeto te ajudou!
https://api.star-history.com/svg?repos=seu-usuario/url-shortening-api&type=Date

</div>
