describe("Blog app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3003");
    cy.contains("Login").click();
    cy.get("input:first").type("Thalisins");
    cy.get("input:last").type("123456");
    cy.contains("login").click();
    cy.contains("logged in").click();
  });
  it("created blogs can only be removed by the same user", function () {
    cy.get("#blog-1").click();
    cy.contains("remove").should("not.exist");
  });
});
