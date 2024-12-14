describe('Teste de Login com Sucesso', () => {
  beforeEach(() => {

    //Supondo que temos o direcionamento da página para o ENDOPOINT, '/login'. Caso contrário fornecer diretamenete no comando 
    //cy.vist().

    cy.visit('/login'); 
  });

  it('Deve fazer login com sucesso usando Email, CPF e Senha', () => {

    //Foi criado no localStorage, por meio do arquivo login.Data.json, um pequeno Json exemplo com a finalidade de buscar os dados
    //para o preenchimento dos campos e validação de cenários.

    cy.fixture('loginData').then((loginData) => {
      const { email, cpf, senha } = loginData.validLogin;

      //Preenchimento dos campos de Email, CPF e Senha.

      cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email);

      cy.get('input[name="cpf"]')
        .type(cpf)
        .should('have.value', cpf);

      cy.get('input[name="senha"]')
        .type(senha)
        .should('have.value', senha);

      //Clica no botão de login para acessar após inclusão dos dados.

      cy.get('button[type="submit"]')
        .click();

      //Valida se o login foi efetuado com sucesso. Partindo do pressuposto que ao logar com sucesso, terá mensagem
      //de boas vindas na aplucação com o nome do usuário, poeríamos fazer outras chacagens, por avatar, link redirecionado, etc.
      //Mas isso depnederá de como foi desenvolvida a aplicação em questão.
      
      cy.contains('Bem-vindo, Usuário').should('be.visible'); 
    });
  });
});
