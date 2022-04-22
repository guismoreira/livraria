describe("Realiza uma busca e não localiza o livro", () => {
  
  describe("Realizar uma busca e o conteudo não é encontrado", () => {
    it("Tem uma barra de pesquisa", () => {
      cy.visit("http://localhost:4200");
      cy.get("#Procurar").should("be.visible");
    });
    it("Realiza uma pesquisa e não encontra nada", () => {
      cy.get("#Procurar").should("be.visible");
      cy.get("#Input")
        .click()
        .type("596987")
        .should("have.value", "596987");
      cy.get("#BotaoProcurar").click();
      cy.contains("h1", "O livro não foi encontrado, tente novamente.").should(
        "be.visible"
      );
    });
  });
});
