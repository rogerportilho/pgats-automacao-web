import { faker } from '@faker-js/faker';

// ========== COMANDOS BÁSICOS (ATÔMICOS) ==========

// Email
Cypress.Commands.add('gerarEmailAleatorio', () => {
  const email = `${faker.internet.userName()}${Date.now()}@teste.com`;
  return cy.wrap(email);
});

/** Validar que está na página inicial */
Cypress.Commands.add('validarPaginaInicial', () => {
    cy.get('#slider').should('be.visible');
});

/** Navegar para a página de Login */
Cypress.Commands.add('irParaPaginaLogin', () => {
  cy.get('a[href="/login"]')
    .should('be.visible')
    .and('contain.text', `Signup / Login`)
    .click();
});

/**Validar se está na página do Signup/ Login 
 * @param {string} tituloNewUserSignup - Título da seção de novo usuário
*/
Cypress.Commands.add('validarPaginaSignupLogin', (tituloNewUserSignup) => {
  cy.contains(tituloNewUserSignup)
    .should('be.visible')
    .and('contain.text', tituloNewUserSignup);
});


/**Campo para preencher o Nome na tela Signup/ Login 
 * @param {string} nome - Nome do usuário a ser preenchido
*/
Cypress.Commands.add('preencherNomeCadastro', (nome) => {
  cy.get('[data-qa="signup-name"]')
    .should('be.visible')
    .type(nome);
});

/**Campo para preencher o Email na tela Signup/ Login 
 * @param {string} email - Email do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEmailCadastro', (email) => {
  cy.get('[data-qa="signup-email"]')
    .should('be.visible')
    .type(email);
});

/**Botão para clicar em Signup */
Cypress.Commands.add('clicarBotaoSignup', () => {
  cy.contains('button', 'Signup')
    .should('be.visible')
    .click();
});

/** Validar se está presente na tela de Criação da conta
 * @param {string} tituloEnterAccountInformation - Título da seção de informações da conta
*/
Cypress.Commands.add('validarPaginaEnterAccountInformation', (tituloEnterAccountInformation) => {
  cy.contains(tituloEnterAccountInformation, { timeout: 10000, matchCase: false })
    .should('be.visible');
});

/**Campos individuais - Informações sobre o gênero da pessoa no cadastro da conta 
  * @param {string} genero - Gênero do usuário ('masculino' ou 'feminino')
*/
Cypress.Commands.add('selecionarGenero', (genero = 'masculino') => {
  const seletor = genero === 'masculino' ? '#id_gender1' : '#id_gender2';
  cy.get(seletor)
    .should('be.visible')
    .check();
});

/** Campo para preencher nome no cadastro da conta
 * @param {string} nome - nome da pessoa a ser preenchido
 */
Cypress.Commands.add('preencherNome', (nome) => {
  cy.get('[data-qa="name"]')
    .should('be.visible')
    .clear()
    .type(nome);
});

/**Valida se o email está preenchido corretamente no cadastro da conta 
 * @param {string} email - Email do usuário a ser validado
*/
Cypress.Commands.add('validarEmailPreenchido', (email) => {
  cy.get('#email')
    .should('be.visible')
    .should('have.value', email);
});

/** Campo para preencher a senha no cadastro da conta
 * @param {string} senha - Senha do usuário a ser preenchido
 */
Cypress.Commands.add('preencherSenha', (senha) => {
  cy.get('#password').type(senha, { log: false });
});

/** Campo para preencher o dia no cadastro da conta
 * @param {string} dia - Dia do usuário a ser preenchido
 */
Cypress.Commands.add('preencherDia', (dia) => {
  cy.get('[data-qa="days"]')
    .should('be.visible')
    .select(dia);
});

/** Campo para preencher o mês no cadastro da conta
 * @param {string} mes - Mês do usuário a ser preenchido
 */
Cypress.Commands.add('preencherMes', (mes) => {
  cy.get('[data-qa="months"]')
    .should('be.visible')
    .select(mes);
});

/** Campo para preencher o ano no cadastro da conta
 * @param {string} ano - Ano do usuário a ser preenchido
 */
Cypress.Commands.add('preencherAno', (ano) => {
  cy.get('[data-qa="years"]')
    .should('be.visible')
    .select(ano);
});

/** Seleciona a data de nascimento completa no cadastro da conta
 * @param {string} dia - Dia do nascimento
 * @param {string} mes - Mês do nascimento
 * @param {string} ano - Ano do nascimento
 */
Cypress.Commands.add('selecionarDataNascimento', (dia, mes, ano) => {
  cy.preencherDia(dia);
  cy.preencherMes(mes);
  cy.preencherAno(ano);
});

/** Marca a opção de newsletter no cadastro da conta */
Cypress.Commands.add('marcarNewsletter', () => {
  cy.get('#newsletter')
    .should('be.visible')
    .check()
    .should('be.checked');
});

Cypress.Commands.add('marcarOfertas', () => {
  cy.get('#optin')
    .should('be.visible')
    .check()
    .should('be.checked');
});

/** Campo para preencher o primeiro nome no cadastro da conta
 * @param {string} nome - Primeiro nome do usuário a ser preenchido
*/
Cypress.Commands.add('preencherPrimeiroNome', (nome) => {
  cy.get('[data-qa="first_name"]')
    .scrollIntoView()
    .should('be.visible')
    .type(nome);
});

/** Campo para preencher o ultimo nome no cadastro da conta
 * @param {string} nome - Último nome do usuário a ser preenchido
*/
Cypress.Commands.add('preencherUltimoNome', (nome) => {
  cy.get('[data-qa="last_name"]')
    .scrollIntoView()
    .should('be.visible')
    .type(nome);
});

/** Campo para preencher o nome da companhia no cadastro da conta
 * @param {string} empresa - Nome da companhia do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEmpresa', (empresa) => {
  cy.get('[data-qa="company"]')
    .scrollIntoView()
    .should('be.visible')
    .type(empresa);
});

/** Campo para preencher o endereço 1 no cadastro da conta
 * @param {string} endereco - Endereço 1 do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEndereco1', (endereco) => {
  cy.get('[data-qa="address"]')
    .scrollIntoView()
    .should('be.visible')
    .type(endereco);
});

/** Campo para preencher o endereço 2 no cadastro da conta (opcional)
 * @param {string} endereco - Endereço 2 do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEndereco2', (endereco) => {
  cy.get('[data-qa="address2"]')
    .scrollIntoView()
    .should('be.visible')
    .type(endereco);
});

/** Campo para preencher o país no cadastro da conta
 * @param {string} pais - País do usuário a ser preenchido
*/
Cypress.Commands.add('selecionarPais', (pais) => {
  cy.get('[data-qa="country"]')
    .scrollIntoView()
    .should('be.visible')
    .select(pais)
    .should('have.value', pais);
});

/** Campo para preencher o estado no cadastro da conta
 * @param {string} estado - Estado do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEstado', (estado) => {
  cy.get('[data-qa="state"]')
    .scrollIntoView()
    .should('be.visible')
    .type(estado);
});

/** Campo para preencher a cidade no cadastro da conta
 * @param {string} cidade - Cidade do usuário a ser preenchido
*/
Cypress.Commands.add('preencherCidade', (cidade) => {
  cy.get('[data-qa="city"]')
    .scrollIntoView()
    .should('be.visible')
    .type(cidade);
});

/** Campo para preencher o CEP no cadastro da conta
 * @param {string} cep - CEP do usuário a ser preenchido
*/
Cypress.Commands.add('preencherCep', (cep) => {
  cy.get('[data-qa="zipcode"]')
    .scrollIntoView()
    .should('be.visible')
    .type(cep);
});

/** Campo para preencher o telefone no cadastro da conta
 * @param {string} telefone - Telefone do usuário a ser preenchido
*/
Cypress.Commands.add('preencherTelefone', (telefone) => {
  cy.get('[data-qa="mobile_number"]')
    .scrollIntoView()
    .should('be.visible')
    .type(telefone);
});

/** Botão para clicar em Create Account */
Cypress.Commands.add('clicarCriarConta', () => {
  cy.get('[data-qa="create-account"]')
    .should('be.visible')
    .and('have.text', 'Create Account')
    .click();
});

/** Validar que a conta foi  criada com sucesso */
Cypress.Commands.add('validarContaCriada', () => {
  cy.get('[data-qa="account-created"]')
    .should('be.visible')
    .and('contain', 'Account Created!');
});

/** Clicar para continuar após a criação da conta */
Cypress.Commands.add('clicarContinuar', () => {
  cy.get('[data-qa="continue-button"]')
    .should('be.visible')
    .and('have.text', 'Continue')
    .click();
});

/**Clicar para deletar a conta do sistema */
Cypress.Commands.add('clicarDeletarConta', () => {
  cy.get('a[href="/delete_account"]')
    .should('be.visible')
    .and('have.text', ' Delete Account')
    .click();
});

/** Validar que está logado na conta 
 * @param {string} nomeUsuario - Nome do usuário logado
*/
Cypress.Commands.add('verificarUsuarioLogado', (nomeUsuario) => {
  cy.get('i.fa-user')
    .parent()
    .should('be.visible')
    .and('contain', 'Logged in as')
    .and('contain', nomeUsuario);
});

/** Validar que a conta foi deletada com sucesso */
Cypress.Commands.add('validarContaDeletada', () => {
  cy.get('[data-qa="account-deleted"]')
    .should('be.visible')
    .and('contain', 'Account Deleted!');
});

/** Campo para preencher o login no cadastro da conta
 * @param {string} email - Email do usuário a ser preenchido
 */ 
Cypress.Commands.add('preencherEmailLogin', (email) => {
  cy.get('[data-qa="login-email"]')
    .should('be.visible')
    .should('be.empty')
    .should('have.attr', 'placeholder', 'Email Address')
    .type(email);
});

/** Campo para preencher a senha na conta
 * @param {string} senha - Senha do usuário a ser preenchido
 */
Cypress.Commands.add('preencherSenhaLogin', (senha) => {
  cy.get('[data-qa="login-password"]')
    .should('be.visible')
    .type(senha, { log: false });
});

/** Clicar no botão de login */
Cypress.Commands.add('clicarBotaoLogin', () => {
  cy.get('[data-qa="login-button"]')
    .should('be.visible')
    .and('have.text', 'Login')
    .click();
});

/** Validar se está na página de Login
 * @param {string} tituloLogin - Título da seção de login
 */
Cypress.Commands.add('validarPaginaLogin', (tituloLogin) => {
  cy.contains(tituloLogin, { timeout: 10000, matchCase: false })
    .should('be.visible');
});

/** Fazer logout do sistema */
Cypress.Commands.add('fazerLogout', () => {
  cy.get('a[href="/logout"]')
    .should('be.visible')
    .and('contain', 'Logout')
    .click();
});

/** Prencher a senha do login */
Cypress.Commands.add('preencherSenhaLogin', (senha) => {
  cy.get('[data-qa="login-password"]')
    .should('be.visible')
    .should('be.empty')
    .should('have.attr', 'placeholder', 'Password')
    .type(senha);
});

/** Clicar no botão de login  */
Cypress.Commands.add('clicarBotaoLogin', () => {
  cy.get('[data-qa="login-button"]')
    .should('be.visible')
    .and('have.text', 'Login')
    .click();
});

/** Realizar o login completo no sistema
 * @param {string} email - Email do usuário
 * @param {string} senha - Senha do usuário
 */
Cypress.Commands.add('fazerLoginCompleto', (email, senha) => {
  cy.irParaPaginaLogin();
  cy.preencherEmailLogin(email);
  cy.preencherSenhaLogin(senha);
  cy.clicarBotaoLogin();
});

/** Preencher informações de endereço completas
 * @param {Object} endereco - Objeto com dados de endereço
 */
Cypress.Commands.add('preencherInformacoesEndereco', (endereco) => {
  cy.preencherPrimeiroNome(endereco.primeiroNome);
  cy.preencherUltimoNome(endereco.ultimoNome);
  cy.preencherEmpresa(endereco.empresa);
  cy.preencherEndereco1(endereco.endereco1);
  cy.preencherEndereco2(endereco.endereco2);
  cy.selecionarPais(endereco.pais);
  cy.preencherEstado(endereco.estado);
  cy.preencherCidade(endereco.cidade);
  cy.preencherCep(endereco.cep);
  cy.preencherTelefone(endereco.telefone);
});

/** Realizar cadastro completo de usuário
 * @param {string} nome - Nome do usuário
 * @param {string} email - Email do usuário
 * @param {string} senha - Senha do usuário
 * @param {Object} dadosUsuario - Dados completos do usuário
 */
Cypress.Commands.add('realizarCadastroCompleto', (nome, email, senha, dadosUsuario) => {
  cy.selecionarGenero('masculino');
  cy.validarEmailPreenchido(email);
  cy.preencherSenha(senha);
  cy.selecionarDataNascimento(dadosUsuario.dia, dadosUsuario.mes, dadosUsuario.ano);
  
  cy.marcarNewsletter();
  cy.marcarOfertas();

  cy.preencherInformacoesEndereco(dadosUsuario);
});

/** Validar que o usuário foi redirecionado para a página de login após logout */
Cypress.Commands.add('validarRedirecionamentoParaLogin', () => {
  cy.url().should('include', '/login');
  cy.get('[data-qa="login-email"]').should('be.visible');
  cy.get('[data-qa="login-password"]').should('be.visible');
});

/** Validar que o usuário foi redirecionado para a página de login após logout */
Cypress.Commands.add('validarRedirecionamentoParaLogin', () => {
  cy.url().should('include', '/login');
  cy.get('[data-qa="login-email"]').should('be.visible');
  cy.get('[data-qa="login-password"]').should('be.visible');
});

/** Validar mensagem de email já existente no cadastro */
Cypress.Commands.add('validarEmailJaExistente', (emailExiste) => {
    cy.get('.signup-form p')
      .should('be.visible')
      .and('contain', emailExiste);
});

/** Ir para a página de contato e validar o título 
 * @param {string} tituloContactUs - Título do link de contato
*/
Cypress.Commands.add('irParaPaginaContactUs', (tituloContactUs) => {
  cy.get('a[href="/contact_us"]')
    .should('be.visible')
    .and('contain.text', tituloContactUs)
    .click();
});

/** Validar página de contato e validar o título
 * @param {string} tituloGetInTouch - Título da seção de contato
*/
Cypress.Commands.add('validarPaginaContactUs', (tituloGetInTouch) => {
  cy.contains(tituloGetInTouch, { timeout: 10000, matchCase: false })
    .should('be.visible');
});

/** Preencher o formulário de contato e anexar um arquivo
 * @param {string} arquivo - Caminho do arquivo a ser anexado
*/
Cypress.Commands.add('anexarArquivoContactUs', (arquivo) => {
  cy.get('input[name="upload_file"]')
    .should('be.visible')
    .selectFile(arquivo);
}); 

/** Preencher o nome no formulário de contato
 * @param {string} nome - Nome do usuário a ser preenchido
*/
Cypress.Commands.add('preencherNomeContactUs', (nome) => {
  cy.get('[data-qa="name"]').should('be.visible').type(nome);
});

/** Preencher o email no formulário de contato
 * @param {string} email - Email do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEmailContactUs', (email) => {
  cy.get('[data-qa="email"]').should('be.visible').type(email);
});

/** Preencher o assunto no formulário de contato
 * @param {string} assunto - Assunto a ser preenchido
*/
Cypress.Commands.add('preencherAssuntoContactUs', (assunto) => {
  cy.get('[data-qa="subject"]').should('be.visible').type(assunto);
});

/** Preencher a mensagem no formulário de contato
 * @param {string} mensagem - Mensagem a ser preenchida
*/ 
Cypress.Commands.add('preencherMensagemContactUs', (mensagem) => {
  cy.get('[data-qa="message"]').should('be.visible').type(mensagem);
});

/** Clicar no botão Submit do formulário de contato */
Cypress.Commands.add('clicarBotaoSubmitContactUs', () => {
  cy.get('[data-qa="submit-button"]')
    .should('be.visible')
    .and('have.value', 'Submit')
    .click();
});

/** Validar mensagem de sucesso após o envio do formulário de contato
 * @param {string} mensagemSucessoContactUs - Mensagem de sucesso esperada
*/
Cypress.Commands.add('validarMensagemSucessoContactUs', (mensagemSucessoContactUs) => {
  cy.get('.status.alert.alert-success')
    .should('be.visible')
    .and('contain.text', mensagemSucessoContactUs);
});

/** Clicar no botão Home para voltar à página inicial */
Cypress.Commands.add('clicarBotaoHome', () => {
  cy.get('#form-section a.btn.btn-success[href="/"]')
    .should('be.visible')
    .and('contain', 'Home')
    .click();
});



/** Clicar no botão Produtos para voltar à página inicial */
Cypress.Commands.add('irParaPaginaProdutos', () => {
  cy.get('a[href="/products"]')
    .should('be.visible')
    .and('contain', 'Products')
    .click();
});

/** Validar página de produtos e validar o título
 * @param {string} tituloAllProducts - Título da seção de todos os produtos
*/
Cypress.Commands.add('validarPaginaProdutos', (tituloAllProducts) => {
  cy.get('.features_items')
    .should('be.visible');
  cy.contains(tituloAllProducts, { timeout: 10000, matchCase: false })
    .should('be.visible');
});

/** Validar se a lista de produtos está visível*/
Cypress.Commands.add('validarListaProdutosVisivel', () => {
  cy.get('.product-image-wrapper')
    .should('have.length.greaterThan', 0)
    .and('be.visible');
});

/** Clicar nos detalhes do primeiro produto da lista */
Cypress.Commands.add('clicarDetalhesPrimeiroProduto', () => {
  cy.get('a[href="/product_details/1"]')
    .first()
    .should('be.visible')
    .click();
});

/** Validar a tela de detalhes do produto */
Cypress.Commands.add('validarTelaDetalhesProduto', () => {
  cy.url()
    .should('include', '/product_details');
  cy.get('.product-information')
    .should('be.visible');
});

Cypress.Commands.add('validarDetalhesProduto', () => {
  cy.get('.product-information').within(() => {
    cy.get('h2').should('be.visible');
    cy.get('p').contains('Category:').should('be.visible');
    cy.get('span span').should('be.visible');
    cy.get('p').contains('Availability:').should('be.visible');
    cy.get('p').contains('Condition:').should('be.visible');
    cy.get('p').contains('Brand:').should('be.visible');
  });
});

/** Preencher o campo de busca de produtos
 * @param {string} produto - Nome do produto a ser buscado
*/
Cypress.Commands.add('preencherCampoBuscaProduto', (produto) => {
  cy.get('#search_product')
    .should('be.visible')
    .type(produto)
    .should('have.value', produto);
});

/** Clicar no botão de busca de produtos */
Cypress.Commands.add('clicarBotaoBusca', () => {
  cy.get('#submit_search')
    .should('be.visible')
    .click();
});

/** Validar os resultados da busca de produtos
 * @param {string} produto - Nome do produto buscado
*/
Cypress.Commands.add('validarResultadosBusca', (produto) => {
  cy.get('.features_items')
    .should('be.visible');
  cy.get('.product-image-wrapper')
    .should('have.length.greaterThan', 0);
  cy.get('.productinfo.text-center p')
    .should('contain.text', produto);
});

/**Validara se está presente na tela de procura do produto */
Cypress.Commands.add('validarTelaResultadoBusca', () => {
  cy.get('.features_items')
    .should('be.visible').within(() => {
      cy.get('h2')
        .should('contain.text', 'Searched Products');
    });
});

/** Validar se a seção de subscription está visível */
Cypress.Commands.add('validarSeccaoSubscription', (tituloSubscription) => {
  cy.get('#footer').scrollIntoView()
    .should('be.visible')
    .and('contain.text', tituloSubscription);
});

/** Preencher o email na seção de subscription
 * @param {string} email - Email do usuário a ser preenchido
*/
Cypress.Commands.add('preencherEmailSubscription', (email) => {
  cy.get('#susbscribe_email')
    .should('be.visible')
    .type(email);
});

/** Clicar no botão Subscribe da seção de subscription */
Cypress.Commands.add('clicarBotaoSubscribe', () => {
  cy.get('#subscribe')
    .should('be.visible')
    .click();
});

/** Validar mensagem de sucesso após a subscription
 * @param {string} mensagemSucesso - Mensagem de sucesso esperada
*/
Cypress.Commands.add('validarMensagemSubscriptionSucesso', (mensagemSucesso) => {
  cy.get('.alert-success')
    .should('be.visible')
    .and('contain.text', mensagemSucesso);
});

/** Ir para a página de carrinho */
Cypress.Commands.add('irParaCarrinho', () => {
  cy.get('a[href="/view_cart"]')
    .should('be.visible')
    .first()
    .and('contain', 'Cart')
    .click();
});

/** Adicionar produto ao carrinho
 * @param {number} produto - Índice do produto a ser adicionado
*/
Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto) => {
  cy.get('.product-image-wrapper').eq(produto).within(() => {
    cy.contains('Add to cart')
      .should('be.visible')
      .click();
  });
});

/** Clicar no botão de continuar comprando no modal do carrinho */
Cypress.Commands.add('clicarContinuarComprandoModalCarrinho', () => {
  cy.get('.modal-footer').within(() => {
    cy.contains('Continue Shopping')
      .should('be.visible')
      .click();
  });
});

/** Clicar no botão de ver carrinho no modal do carrinho */
Cypress.Commands.add('clicarVerCarrinhoModalCarrinho', () => {
  cy.get('.modal-footer').within(() => {
    cy.contains('View Cart')
      .should('be.visible')
      .click();
  });
});

/**Verifica se está na página do carrinho */
Cypress.Commands.add('validarPaginaCarrinho', () => {
  cy.url().should('include', '/view_cart');
  cy.get('#cart_items')
    .should('be.visible');
  cy.get('.breadcrumbs')
    .should('be.visible')
    .and('contain.text', 'Shopping Cart');
});

/** Validar que o produto foi adicionado ao carrinho
 * @param {string} nomeProduto - Nome do produto adicionado
*/
Cypress.Commands.add('validarProdutoAdicionadoCarrinho', (nomeProduto) => {
  cy.get('table.cart_info')
    .should('be.visible')
    .within(() => {
      cy.contains(nomeProduto)
        .should('be.visible');
    });
});

/** Clicar no botão de checkout */
Cypress.Commands.add('clicarProcederCheckout', () => {
  cy.contains('a', 'Proceed To Checkout')
    .should('be.visible')
    .click();
});

/** Validar detalhes do endereço para entrega*/
Cypress.Commands.add('validarDetalhesEndereco', () => {
  cy.get('#cart_items').within(() => {
      cy.get('h2').should('contain.text', 'Address Details');
      cy.get('[data-qa="checkout-info"]')
        .should('be.visible')
        .and('contain.text', 'Your delivery address');
    });
});

/** Validar página de checkout */
Cypress.Commands.add('validarPaginaCheckout', () => {
  cy.url().should('include', '/checkout');
  cy.get('.checkout-information')
    .should('be.visible');
});

/** Validar detalhes do pedido na página de checkout */
Cypress.Commands.add('validarDetalhesPedidoCheckout', () => {
  cy.get('#cart_items').scrollIntoView().within(() => {
    cy.get('h2').should('contain.text', 'Review Your Order');
    cy.get('#cart_info')
      .should('be.visible');
    cy.get('table')
      .should('be.visible')
      .and('contain.text', 'Item')
      .and('contain.text', 'Description')
      .and('contain.text', 'Price')
      .and('contain.text', 'Quantity')
      .and('contain.text', 'Total');
  });
});

/** Preencher comentario sobre seu pedido */
Cypress.Commands.add('preencherComentarioPedido', (comentario) => {
  cy.get('#ordermsg').scrollIntoView()
    .should('be.visible')
    .type(comentario);
});

/** Clicar no botão de confirmar pedido */
Cypress.Commands.add('clicarBotaoConfirmarPedido', () => {
  cy.get('#ordermsg').scrollIntoView()
  cy.contains('a', 'Place Order')
    .should('be.visible')
    .click();
});

/**Preencher informação do nome da pessoa no cartão referente ao pagamento  
 * @param {string} nomeCartao - Nome do cartão a ser preenchido
*/
Cypress.Commands.add('preencherNomeCartaoPagamento', (nomeCartao) => {
  cy.get('input[name="name_on_card"]')
    .should('be.visible')
    .type(nomeCartao);
});

/** Preencher o número do cartão referente ao pagamento 
 * @param {string} numeroCartao - Número do cartão a ser preenchido
*/
Cypress.Commands.add('preencherNumeroCartaoPagamento', (numeroCartao) => {
  cy.get('[data-qa="card-number"]')
    .should('be.visible')
    .type(numeroCartao);
});

/** Preencher o CVC do cartão referente ao pagamento 
 * @param {string} cvcCartao - CVC do cartão a ser preenchido
*/
Cypress.Commands.add('preencherCvcCartaoPagamento', (cvcCartao) => {
  cy.get('input[name="cvc"]')
    .should('be.visible')
    .type(cvcCartao);
});

/** Preencher a data de expiração do cartão referente ao pagamento 
 * @param {string} dataExpiracao - Data de expiração do cartão a ser preenchida
*/
Cypress.Commands.add('preencherDataExpiracaoCartaoPagamento', (dataExpiracao) => {
  cy.get('input[name="expiry_month"]')
    .should('be.visible')
    .type(dataExpiracao);
});

/** Preencher o ano de expiração do cartão referente ao pagamento 
 * @param {string} anoExpiracao - Ano de expiração do cartão a ser preenchido
*/
Cypress.Commands.add('preencherAnoExpiracaoCartaoPagamento', (anoExpiracao) => {
  cy.get('input[name="expiry_year"]')
    .should('be.visible')
    .type(anoExpiracao);
});

/** Clicar no botão de pagar e confirmar a compra */
Cypress.Commands.add('clicarBotaoPagarConfirmarCompra', () => {
  cy.get('[data-qa="pay-button"]')
    .should('be.visible')
    .click();
});

/** Validar página de pedido confirmado */
Cypress.Commands.add('validarPaginaPedidoConfirmado', () => {
  cy.url().should('include', '/payment_done');
  cy.get('.container')
    .should('be.visible')
    .and('contain.text', 'Your order has been confirmed!');
});

/** Clicar no botão de continuar após o pedido confirmado */
Cypress.Commands.add('clicarContinuarAposPedido', () => {
  cy.contains('a', 'Continue')
    .should('be.visible')
    .click();
}); 

/** Validar que o usuário foi redirecionado para a página inicial após o pedido */
Cypress.Commands.add('validarRedirecionamentoPaginaInicialAposPedido', () => {
  cy.url().should('eq', Cypress.config().baseUrl + '/');
  cy.get('#slider').should('be.visible');
});