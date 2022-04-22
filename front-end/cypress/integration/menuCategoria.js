describe("Manipula o menu de categoria", () => {
  
  describe("Utiliza o menu de categorias", () => {
    it("Tem um menu de categoria", () => {
      cy.visit("http://localhost:4200");
      cy.get("#Categorias").should("be.visible");
    });
    it("Clicar no menu de categoria", () => {
      cy.get("#Categorias").click();
    });
    it("Tem uma categoria Programação", () => {
      cy.get("#Programação").should("be.visible");
    });
    it("Entra na categoria Programação", () => {
      cy.get("#Programação").click();
    });
  });
});
