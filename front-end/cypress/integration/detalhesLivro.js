describe("Clica no livro para ver suas informações", () => {

  describe("Clicar no livro para ver mais detalhes", () => {
    it("Clicar no livro para abrir os detalhes", () => {
      cy.visit("http://localhost:4200");
      cy.get("#Livro").should("be.visible").click();
    });
  });

  describe("Contém detalhes do livro", () => {
    it("Contém título do livro", () => {
      cy.get("#Titulo").should("be.visible");
    });
    it("Contém autor do livro", () => {
      cy.get("#Autor").should("be.visible");
    });
    it("Contém capa do livro", () => {
      cy.get("#Capa").should("be.visible");
    });
    it("Contém preço do livro", () => {
      cy.get("#Preco").should("be.visible");
    });
    it("Contém informações do livro", () => {
      cy.get("#Detalhes").should("be.visible");
    });
  });
});
