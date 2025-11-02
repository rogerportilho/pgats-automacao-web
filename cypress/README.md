# Testes de Automação - Automation Exercise

## Estrutura do Projeto

```
cypress/
├── e2e/
│   └── registro-usuario.cy.js    # Test Case 1: Register User
├── fixtures/
│   ├── registro.json             # Dados de teste para registro
│   └── users.json               # Usuários para testes
└── support/
    ├── commands.js              # Comandos customizados
    └── e2e.js                   # Configurações globais
```

## Test Cases Implementados

### Test Case 1: Register User
- ✅ Registro completo de usuário
- ✅ Validação de todas as etapas
- ✅ Exclusão da conta ao final
- ✅ Tratamento de erro para email existente

## Como Executar

### Executar todos os testes
```bash
npx cypress run
```

### Executar em modo interativo
```bash
npx cypress open
```

### Executar teste específico
```bash
npx cypress run --spec "cypress/e2e/registro-usuario.cy.js"
```

## Comandos Customizados

### Navegação
- `cy.irParaPaginaLogin()` - Navega para página de login/signup

### Validações
- `cy.validarPaginaSignupLogin(titulo)` - Valida página de signup
- `cy.validarContaCriada()` - Valida criação da conta
- `cy.validarContaDeletada()` - Valida exclusão da conta
- `cy.verificarUsuarioLogado(nome)` - Valida usuário logado

### Preenchimento de Formulários
- `cy.preencherNomeCadastro(nome)` - Preenche nome no signup
- `cy.preencherEmailCadastro(email)` - Preenche email no signup
- `cy.selecionarDataNascimento(dia, mes, ano)` - Seleciona data completa
- `cy.realizarCadastroCompleto(nome, email, senha, dados)` - Comando composto

### Ações
- `cy.clicarBotaoSignup()` - Clica no botão Signup
- `cy.clicarCriarConta()` - Clica em Create Account
- `cy.clicarContinuar()` - Clica em Continue
- `cy.clicarDeletarConta()` - Clica em Delete Account

## Boas Práticas Implementadas

- **DRY (Don't Repeat Yourself)**: Comandos reutilizáveis
- **KISS (Keep It Simple, Stupid)**: Código simples e direto
- **Page Object Pattern**: Comandos organizados por funcionalidade
- **Dados dinâmicos**: Uso do Faker.js para dados únicos
- **Fixtures**: Dados de teste centralizados
- **Comandos compostos**: Agrupamento de ações relacionadas