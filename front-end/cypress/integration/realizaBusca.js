describe("Realiza uma busca", () => {

  describe("Realizar uma busca efetiva", () => {
    it("Tem uma barra de pesquisa", () => {
      cy.visit("http://localhost:4200");
      cy.get("#Procurar").should("be.visible");
    });
    it("Realiza uma pesquisa com o nome Flávio", () => {
      cy.get("#Procurar").should("be.visible");
      cy.get("#Input").click().type("Flávio").should("have.value", "Flávio");
      cy.get("#BotaoProcurar").click();
    });
  });
});


