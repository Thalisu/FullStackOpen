describe("Blog app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3003");
    cy.contains("Login").click();
    cy.get("input:first").type("Thalisins");
    cy.get("input:last").type("123456");
    cy.contains("login").click();
    cy.contains("logged in").click();
  });
  it("the list of blogs is sorted by likes", function () {
    cy.get("ol>li").eq(0).should("contain", "Canonical string");
    cy.get("ol>li").eq(1).should("contain", "Go To");
    cy.get("ol>li").eq(2).should("contain", "Type wars");
    cy.get("ol>li").eq(3).should("contain", "a note");
  });
});
