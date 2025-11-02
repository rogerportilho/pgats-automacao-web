/// <reference types="cypress" />

import { da, faker } from '@faker-js/faker';

describe('Automation Exercises', () => {
  let dados;

  beforeEach(() => {
    cy.fixture('registro').then((fixture) => {
      dados = fixture;
    });
  });

  it('TC001 - Register User', () => {
    const nomeUsuario = faker.person.firstName();
    const emailUsuario = `${faker.internet.userName()}${Date.now()}@teste.com`;
    const senhaUsuario = faker.internet.password({ length: 8 });

    cy.visit('/');
    cy.validarPaginaInicial();
    cy.title().should('eq', dados.textos.tituloPagina);

    cy.irParaPaginaLogin();
    cy.validarPaginaSignupLogin(dados.textos.tituloNewUserSignup);
    cy.preencherNomeCadastro(nomeUsuario);
    cy.preencherEmailCadastro(emailUsuario);
    cy.clicarBotaoSignup();

    cy.validarPaginaEnterAccountInformation(dados.textos.tituloEnterAccountInformation);

    cy.selecionarGenero('masculino');
    cy.validarEmailPreenchido(emailUsuario);
    cy.preencherSenha(senhaUsuario);
    cy.selecionarDataNascimento(dados.dadosPadrao.dia, dados.dadosPadrao.mes, dados.dadosPadrao.ano);
    cy.marcarNewsletter();
    cy.marcarOfertas();
    cy.preencherPrimeiroNome(dados.dadosPadrao.primeiroNome);
    cy.preencherUltimoNome(dados.dadosPadrao.ultimoNome);
    cy.preencherEmpresa(dados.dadosPadrao.empresa);
    cy.preencherEndereco1(dados.dadosPadrao.endereco1);
    cy.preencherEndereco2(dados.dadosPadrao.endereco2);
    cy.selecionarPais(dados.dadosPadrao.pais);
    cy.preencherEstado(dados.dadosPadrao.estado);
    cy.preencherCidade(dados.dadosPadrao.cidade);
    cy.preencherCep(dados.dadosPadrao.cep);
    cy.preencherTelefone(dados.dadosPadrao.telefone);
    cy.clicarCriarConta();

    cy.validarContaCriada();
    cy.clicarContinuar();

    cy.verificarUsuarioLogado(nomeUsuario);
    cy.clicarDeletarConta();
    cy.validarContaDeletada();
    cy.clicarContinuar();
  });

  it('TC002 - Login User with correct email and password', () => {
    const nomeUsuario = faker.person.firstName();
    const emailUsuario = `${faker.internet.userName()}${Date.now()}@teste.com`;
    const senhaUsuario = faker.internet.password({ length: 8 });

    // PRIMEIRO: Criar uma conta
    cy.visit('/');
    cy.validarPaginaInicial();
    cy.irParaPaginaLogin();
    cy.preencherNomeCadastro(nomeUsuario);
    cy.preencherEmailCadastro(emailUsuario);
    cy.clicarBotaoSignup();
    
    cy.selecionarGenero('masculino');
    cy.preencherSenha(senhaUsuario);
    cy.selecionarDataNascimento(dados.dadosPadrao.dia, dados.dadosPadrao.mes, dados.dadosPadrao.ano);
    cy.marcarNewsletter();
    cy.marcarOfertas();
    cy.preencherPrimeiroNome(dados.dadosPadrao.primeiroNome);
    cy.preencherUltimoNome(dados.dadosPadrao.ultimoNome);
    cy.preencherEmpresa(dados.dadosPadrao.empresa);
    cy.preencherEndereco1(dados.dadosPadrao.endereco1);
    cy.preencherEndereco2(dados.dadosPadrao.endereco2);
    cy.selecionarPais(dados.dadosPadrao.pais);
    cy.preencherEstado(dados.dadosPadrao.estado);
    cy.preencherCidade(dados.dadosPadrao.cidade);
    cy.preencherCep(dados.dadosPadrao.cep);
    cy.preencherTelefone(dados.dadosPadrao.telefone);
    cy.clicarCriarConta();
    cy.clicarContinuar();
    
    cy.fazerLogout();

    cy.visit('/');
    cy.validarPaginaInicial();
    cy.title().should('eq', dados.textos.tituloPagina);
    cy.irParaPaginaLogin();
    cy.validarPaginaLogin(dados.textos.tituloLogin);

    cy.preencherEmailLogin(emailUsuario);
    cy.preencherSenhaLogin(senhaUsuario);

    cy.clicarBotaoLogin();
    cy.verificarUsuarioLogado(nomeUsuario);

    cy.clicarDeletarConta();
    cy.validarContaDeletada();
  });

  it('TC003 - Login User with incorrect email and password', () => {
    const emailIncorreto = faker.internet.email();
    const senhaIncorreta = faker.internet.password();

    cy.visit('/');
    cy.validarPaginaInicial();
    cy.title().should('eq', dados.textos.tituloPagina);

    cy.irParaPaginaLogin();
    cy.validarPaginaLogin(dados.textos.tituloLogin);
    cy.preencherEmailLogin(emailIncorreto);
    cy.preencherSenhaLogin(senhaIncorreta);
    cy.clicarBotaoLogin();
    cy.get('.login-form p')
      .should('be.visible')
      .and('contain', dados.textos.loginIncorreto);
  });

  it('TC004 - Logout User', () => {
    const nomeUsuario = faker.person.firstName();
    const emailUsuario = `${faker.internet.userName()}${Date.now()}@teste.com`;
    const senhaUsuario = faker.internet.password({ length: 8 });

    cy.visit('/');
    cy.validarPaginaInicial();
    cy.irParaPaginaLogin();
    cy.preencherNomeCadastro(nomeUsuario);
    cy.preencherEmailCadastro(emailUsuario);
    cy.clicarBotaoSignup();
    
    cy.selecionarGenero('masculino');
    cy.preencherSenha(senhaUsuario);
    cy.selecionarDataNascimento(dados.dadosPadrao.dia, dados.dadosPadrao.mes, dados.dadosPadrao.ano);
    cy.marcarNewsletter();
    cy.marcarOfertas();
    cy.preencherPrimeiroNome(dados.dadosPadrao.primeiroNome);
    cy.preencherUltimoNome(dados.dadosPadrao.ultimoNome);
    cy.preencherEmpresa(dados.dadosPadrao.empresa);
    cy.preencherEndereco1(dados.dadosPadrao.endereco1);
    cy.preencherEndereco2(dados.dadosPadrao.endereco2);
    cy.selecionarPais(dados.dadosPadrao.pais);
    cy.preencherEstado(dados.dadosPadrao.estado);
    cy.preencherCidade(dados.dadosPadrao.cidade);
    cy.preencherCep(dados.dadosPadrao.cep);
    cy.preencherTelefone(dados.dadosPadrao.telefone);
    cy.clicarCriarConta();
    cy.clicarContinuar();
    
    cy.fazerLogout();

    cy.visit('/');
    cy.title().should('eq', dados.textos.tituloPagina);
    cy.irParaPaginaLogin();
    cy.validarPaginaLogin(dados.textos.tituloLogin);
    cy.preencherEmailLogin(emailUsuario);
    cy.preencherSenhaLogin(senhaUsuario);
    cy.clicarBotaoLogin();

    cy.verificarUsuarioLogado(nomeUsuario);
    cy.fazerLogout();

    cy.validarRedirecionamentoParaLogin();
  });

  it('TC005 - Register User with existing email', () => {
    const nomeUsuario1 = faker.person.firstName();
    const nomeUsuario2 = faker.person.firstName();
    const emailExistente = `${faker.internet.userName()}${Date.now()}@teste.com`;
    const senhaUsuario = faker.internet.password({ length: 8 });

    cy.visit('/');
    cy.irParaPaginaLogin();
    cy.preencherNomeCadastro(nomeUsuario1);
    cy.preencherEmailCadastro(emailExistente);
    cy.clicarBotaoSignup();
    
    cy.selecionarGenero('masculino');
    cy.preencherSenha(senhaUsuario);
    cy.selecionarDataNascimento(dados.dadosPadrao.dia, dados.dadosPadrao.mes, dados.dadosPadrao.ano);
    cy.marcarNewsletter();
    cy.marcarOfertas();
    cy.preencherPrimeiroNome(dados.dadosPadrao.primeiroNome);
    cy.preencherUltimoNome(dados.dadosPadrao.ultimoNome);
    cy.preencherEmpresa(dados.dadosPadrao.empresa);
    cy.preencherEndereco1(dados.dadosPadrao.endereco1);
    cy.preencherEndereco2(dados.dadosPadrao.endereco2);
    cy.selecionarPais(dados.dadosPadrao.pais);
    cy.preencherEstado(dados.dadosPadrao.estado);
    cy.preencherCidade(dados.dadosPadrao.cidade);
    cy.preencherCep(dados.dadosPadrao.cep);
    cy.preencherTelefone(dados.dadosPadrao.telefone);
    cy.clicarCriarConta();
    cy.clicarContinuar();
    
    cy.fazerLogout();

    cy.visit('/');
    cy.title().should('eq', dados.textos.tituloPagina);
    cy.irParaPaginaLogin();
    cy.validarPaginaSignupLogin(dados.textos.tituloNewUserSignup);
    cy.preencherNomeCadastro(nomeUsuario2);
    cy.preencherEmailCadastro(emailExistente);
    cy.clicarBotaoSignup();
    cy.validarEmailJaExistente(dados.textos.emailExiste);
  });

  it('TC006 - Contact Us Form', () => {
    cy.visit('/');
    cy.validarPaginaInicial();

    cy.irParaPaginaContactUs(dados.textos.tituloContactUs);
    cy.validarPaginaContactUs(dados.textos.tituloGetInTouch);
    cy.preencherNomeContactUs(faker.person.firstName());
    cy.preencherEmailContactUs(faker.internet.email());
    cy.preencherAssuntoContactUs(dados.textos.assuntoContactUs);
    cy.preencherMensagemContactUs(dados.textos.mensagemContactUs);
    cy.anexarArquivoContactUs('cypress/fixtures/imagem-teste.png');
    cy.clicarBotaoSubmitContactUs();

    cy.validarMensagemSucessoContactUs(dados.textos.mensagemSucessoContactUs);
    cy.clicarBotaoHome();
    cy.validarPaginaInicial();
  });

  it('TC008 - Verify All Products and product detail page', () => {
    cy.visit('/');
    cy.validarPaginaInicial();

    cy.irParaPaginaProdutos();
    cy.validarPaginaProdutos(dados.textos.tituloAllProducts);
    cy.validarListaProdutosVisivel();

    cy.clicarDetalhesPrimeiroProduto();
    cy.validarTelaDetalhesProduto();
    cy.validarDetalhesProduto();
  });

  it('TC009 - Search Product', () => {
    cy.visit('/');
    cy.validarPaginaInicial();

    cy.irParaPaginaProdutos();
    cy.validarPaginaProdutos(dados.textos.tituloAllProducts);
    cy.preencherCampoBuscaProduto(dados.dadosPadrao.produtoPesquisa);
    cy.clicarBotaoBusca();

    cy.validarResultadosBusca(dados.dadosPadrao.produtoPesquisa);
    cy.validarTelaResultadoBusca();
  });

  it('TC010 - Verify Subscription in home page', () => {
    cy.visit('/');
    cy.validarPaginaInicial();
    
    cy.validarSeccaoSubscription(dados.textos.tituloSubscription);

    cy.preencherEmailSubscription(dados.dadosPadrao.email);
    cy.clicarBotaoSubscribe();

    cy.validarMensagemSubscriptionSucesso('You have been successfully subscribed!');
  });

  it('TC015 - Place Order: Register before Checkout', () => {
    const nomeUsuario = faker.person.firstName();
    const emailUsuario = `${faker.internet.userName()}${Date.now()}@teste.com`;
    const senhaUsuario = faker.internet.password({ length: 8 });

    cy.visit('/');
    cy.validarPaginaInicial();
    cy.irParaPaginaLogin();
    cy.preencherNomeCadastro(nomeUsuario);
    cy.preencherEmailCadastro(emailUsuario);
    cy.clicarBotaoSignup();
    
    cy.selecionarGenero('masculino');
    cy.preencherSenha(senhaUsuario);
    cy.selecionarDataNascimento(dados.dadosPadrao.dia, dados.dadosPadrao.mes, dados.dadosPadrao.ano);
    cy.marcarNewsletter();
    cy.marcarOfertas();
    cy.preencherPrimeiroNome(dados.dadosPadrao.primeiroNome);
    cy.preencherUltimoNome(dados.dadosPadrao.ultimoNome);
    cy.preencherEmpresa(dados.dadosPadrao.empresa);
    cy.preencherEndereco1(dados.dadosPadrao.endereco1);
    cy.preencherEndereco2(dados.dadosPadrao.endereco2);
    cy.selecionarPais(dados.dadosPadrao.pais);
    cy.preencherEstado(dados.dadosPadrao.estado);
    cy.preencherCidade(dados.dadosPadrao.cidade);
    cy.preencherCep(dados.dadosPadrao.cep);
    cy.preencherTelefone(dados.dadosPadrao.telefone);
    cy.clicarCriarConta();
    cy.validarContaCriada();
    cy.clicarContinuar();

    cy.verificarUsuarioLogado(nomeUsuario);
    cy.adicionarProdutoAoCarrinho(0);
    cy.clicarContinuarComprandoModalCarrinho();
    cy.scrollTo('top');
    cy.irParaCarrinho();
    cy.validarPaginaCarrinho();
    cy.clicarProcederCheckout();
    cy.validarDetalhesEndereco();
    cy.validarDetalhesPedidoCheckout();
    cy.preencherComentarioPedido(dados.dadosPadrao.comentarioPedido);
    cy.clicarBotaoConfirmarPedido();
    cy.preencherNomeCartaoPagamento(dados.dadosPadrao.nomeCartao);
    cy.preencherNumeroCartaoPagamento(dados.dadosPadrao.numeroCartao);
    cy.preencherCvcCartaoPagamento(dados.dadosPadrao.cvcCartao);
    cy.preencherDataExpiracaoCartaoPagamento(dados.dadosPadrao.mesVencimento);
    cy.preencherAnoExpiracaoCartaoPagamento(dados.dadosPadrao.anoVencimento);
    cy.clicarBotaoPagarConfirmarCompra();
    cy.validarPaginaPedidoConfirmado();
    cy.clicarDeletarConta();
    cy.validarContaDeletada();
    cy.clicarContinuar();
  });
});