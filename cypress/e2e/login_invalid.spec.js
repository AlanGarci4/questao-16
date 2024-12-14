describe('Teste de Login com Dados Inválidos', () => {
  beforeEach(() => {

    //Supondo que temos o direcionamento da página para o ENDOPOINT, '/login'. Caso contrário fornecer diretamenete no comando 
    //cy.vist().

    cy.visit('/login');
  });

  it('Deve exibir mensagem de erro se o email for inválido', () => {

    //Foi criado no localStorage, por meio do arquivo login.Data.json, um pequeno Json exemplo com a finalidade de buscar os dados
    //para o preenchimento dos campos e validação de cenários.

    cy.fixture('loginData').then((loginData) => {
      const { email, cpf, senha } = loginData.invalidEmail;

      //Preenchimento dos campos, mas com email inválido.
      
      cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email);

      cy.get('input[name="cpf"]')
        .type(cpf)
        .should('have.value', cpf);

      cy.get('input[name="senha"]')
        .type(senha)
        .should('have.value', senha);

      //Clica no botão de login para tentativa de acesso após inclusão dos dados.

      cy.get('button[type="submit"]')
        .click();

      //Verifica se a mensagem de erro é exibida.

      cy.contains('Dados inválidos').should('be.visible'); 
    });
  });

  it('Deve exibir mensagem de erro se o CPF for inválido', () => {

    //Foi criado no localStorage, por meio do arquivo login.Data.json, um pequeno Json exemplo com a finalidade de buscar os dados
    //para o preenchimento dos campos e validação de cenários.

    cy.fixture('loginData').then((loginData) => {
      const { email, cpf, senha } = loginData.invalidCpf;

      //Preenchimento  dos campos, mas com CPF inválido.

      cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email);

      cy.get('input[name="cpf"]')
        .type(cpf)
        .should('have.value', cpf);

      cy.get('input[name="senha"]')
        .type(senha)
        .should('have.value', senha);

      //Clica no botão de login para tentativa de acesso após inclusão dos dados.

      cy.get('button[type="submit"]')
        .click();

      //Verifica se a mensagem de erro é exibida.

      cy.contains('Dados inválidos').should('be.visible');
    });
  });

  it('Deve exibir mensagem de erro se a senha for incorreta', () => {

    //Foi criado no localStorage, por meio do arquivo login.Data.json, um pequeno Json exemplo com a finalidade de buscar os dados
    //para o preenchimento dos campos e validação de cenários.

    cy.fixture('loginData').then((loginData) => {
      const { email, cpf, senha } = loginData.invalidPassword;

      //Preenchimento dos campos, mas com senha incorreta.

      cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email);

      cy.get('input[name="cpf"]')
        .type(cpf)
        .should('have.value', cpf);

      cy.get('input[name="senha"]')
        .type(senha)
        .should('have.value', senha);

      //Clica no botão de login para tentativa de acesso após inclusão dos dados.

      cy.get('button[type="submit"]')
        .click();

      //Verifica se a mensagem de erro é exibida.

      cy.contains('Dados inválidos').should('be.visible');
    });
  });

  it('Deve exibir mensagem de erro se algum campo estiver vazio', () => {

    //Foi criado no localStorage, por meio do arquivo login.Data.json, um pequeno Json exemplo com a finalidade de buscar os dados
    //para o preenchimento dos campos e validação de cenários.

    cy.fixture('loginData').then((loginData) => {
      const { email, cpf, senha } = loginData.emptyFields;

      //Preenchimento dos campos, mas com valores vazios, ou seja, ao se referir ao loginData.json, irá coletar dados referente
      //aos campos vazios, emptyFields.

      cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email);

      cy.get('input[name="cpf"]')
        .type(cpf)
        .should('have.value', cpf);

      cy.get('input[name="senha"]')
        .type(senha)
        .should('have.value', senha);

       //Clica no botão de login para tentativa de acesso após "inclusão dos dados".

      cy.get('button[type="submit"]')
        .click();

      //Verifica se as mensagens de alerta e de erro são exibidas.

      cy.contains('Preencha os campos obrigatórios').should('be.visible'); 
      cy.contains('Dados Inválidos').should('be.visible');
    });
  });
});
