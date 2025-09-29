# Quiz sobre Manuel Bandeira

Um aplicativo de quiz interativo sobre a vida e obra do poeta brasileiro Manuel Bandeira, desenvolvido como projeto escolar de Literatura. O quiz apresenta questões de vestibulares com foco em suas poesias e contexto literário.

## 🎯 Objetivo

Desenvolver uma ferramenta educacional interativa para estudantes de literatura brasileira, utilizando questões reais de vestibulares sobre Manuel Bandeira. O projeto enfatiza design responsivo, animações suaves e experiência do usuário intuitiva.

## ✨ Funcionalidades

### 📚 Estrutura das Questões

- **10 questões aleatórias** a cada novo quiz
- Questões baseadas em vestibulares (ENEM, Fuvest, etc.)
- Poemas e trechos literários de Manuel Bandeira
- 5 alternativas (A, B, C, D, E) por questão
- Explicações detalhadas para cada resposta

### 🎮 Interface do Usuário

- **Tela de Boas-vindas**: Apresentação do quiz com botão de início
- **Modal de Instruções**: Explicação sobre como jogar
- **Interface do Quiz**: Questões com alternativas interativas
- **Tela de Resultados**: Estatísticas finais e opção de reiniciar

### 🎨 Design e Interatividade

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Feedback visual com círculos coloridos
- **Tema Coerente**: Paleta de cores harmoniosa e tipografia elegante
- **Logo Interativo**: Permite reiniciar o quiz a qualquer momento

### 📊 Sistema de Pontuação

- Contador de questões (ex: 3/10)
- Barra de progresso visual
- Estatísticas finais: acertos, erros e porcentagem
- Feedback imediato após cada resposta

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19**: Framework JavaScript moderno
- **Vite**: Build tool rápido e eficiente
- **CSS Modules**: Estilização componentizada
- **React Router DOM**: Navegação entre telas

### Desenvolvimento

- **ESLint**: Linting e qualidade de código
- **Vercel**: Deploy e hospedagem

### Estrutura do Projeto

```text
manuel-bandeira-quiz/
├── public/
│   └── icon.png                 # Ícone da aplicação
├── src/
│   ├── components/
│   │   ├── Animations/
│   │   │   └── MouseAnimation.jsx    # Animações de feedback
│   │   ├── Quiz/
│   │   │   ├── Alternative.jsx       # Componente de alternativa
│   │   │   ├── FeedbackModal.jsx     # Modal de feedback
│   │   │   ├── Question.jsx          # Componente de questão
│   │   │   └── QuizContainer.jsx     # Container principal do quiz
│   │   ├── Screens/
│   │   │   ├── InstructionsModal.jsx # Modal de instruções
│   │   │   ├── ResultScreen.jsx      # Tela de resultados
│   │   │   └── WelcomeScreen.jsx     # Tela de boas-vindas
│   │   └── UI/
│   │       ├── Button.jsx            # Botão reutilizável
│   │       └── ProgressBar.jsx       # Barra de progresso
│   ├── data/
│   │   └── questions.json           # Banco de questões
│   ├── hooks/
│   │   └── useQuiz.js               # Hook personalizado para lógica do quiz
│   ├── styles/
│   │   ├── animations.css           # Animações CSS
│   │   ├── global.css               # Estilos globais
│   │   └── components/              # Estilos específicos dos componentes
│   ├── utils/
│   │   └── helpers.js               # Funções utilitárias
│   ├── App.jsx                      # Componente principal
│   └── main.jsx                     # Ponto de entrada
├── package.json                     # Dependências e scripts
├── vite.config.js                   # Configuração do Vite
├── eslint.config.js                 # Configuração do ESLint
└── vercel.json                      # Configuração de deploy
```

## 🚀 Como Acessar

### Acesso Online

O quiz está disponível online e pode ser acessado diretamente em: **[https://manuel-bandeira-quiz.vercel.app/](https://manuel-bandeira-quiz.vercel.app/)**

### Execução Local (Opcional)

Se preferir executar localmente para desenvolvimento:

#### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

#### Instalação e Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/JuanMOLopes/manuel-bandeira-quiz.git
   cd manuel-bandeira-quiz
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

#### Outros Comandos Disponíveis

- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm run lint`: Executa o linter para verificar qualidade do código

## 📱 Design Responsivo

O aplicativo foi desenvolvido com foco na experiência mobile-first:

- **Mobile (até 480px)**: Layout otimizado para telas pequenas
- **Tablet (481px - 768px)**: Ajustes para tablets e dispositivos médios
- **Desktop (769px+)**: Layout completo para telas grandes

## 🎨 Paleta de Cores

- **Primária**: Azul escuro (#1a365d)
- **Secundária**: Azul claro (#3182ce)
- **Acerto**: Verde (#38a169)
- **Erro**: Vermelho (#e53e3e)
- **Fundo**: Branco/tons neutros

## 📈 Funcionalidades Técnicas

### Gerenciamento de Estado

- Context API para estado global do quiz
- Hook personalizado `useQuiz` para lógica específica
- Navegação fluida entre telas

### Animações e Feedback

- Animações CSS com keyframes
- Transições suaves entre estados
- Feedback visual imediato para respostas

### Dados das Questões

- Estrutura JSON organizada
- Randomização automática das questões
- Metadados completos (fonte, explicação, etc.)

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Sugestões de Contribuição

- Adicionar mais questões ao banco de dados
- Melhorar animações e transições
- Implementar novos temas visuais
- Adicionar suporte a múltiplos idiomas
- Criar testes automatizados

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como atividade escolar de Literatura.

## 👨‍💻 Autor

**Juan MOLopes** - Desenvolvimento do projeto

---

**Nota**: Este projeto faz parte de uma atividade escolar de Literatura, focando no estudo da obra de Manuel Bandeira através de questões interativas de vestibulares.
