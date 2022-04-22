describe("Consegue entrar na página e identifica o logo", () => {
  
  describe("Consegue entrar na página e identifica o logo", () => {
    it("Entrar em localhost:4200", () => {
      cy.visit("http://localhost:4200");
    });
    it("Tem um logo", () => {
      cy.get(".logo").should("be.visible");
    });
  });
});
