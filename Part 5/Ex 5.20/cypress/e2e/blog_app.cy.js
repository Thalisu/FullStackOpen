describe("Blog app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3003");
  });
  it("can show more info in blogs", function () {
    cy.contains("show").click();
    cy.contains("like").click();
    
  });
});
