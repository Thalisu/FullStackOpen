describe("Blog app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3003");
    cy.contains("Login").click();
    cy.get("input:first").type("Thalisins");
    cy.get("input:last").type("123456");
    cy.contains("login").click();
    cy.contains("logged in").click();
  });
  it("a new blog can be created", function () {
    cy.contains("Add new blog").click();
    cy.contains("Title").click().type("a note created by cypress");
    cy.contains("Author").click().type("fullStack");
    cy.contains("Url").click().type("https://qualquercosia.com");
    cy.get("form:first").submit();
  });
  it("the created blog can be removed by the same user", function () {
    cy.get("#blog-5").click();
    cy.contains("remove").click();
    cy.contains("removed").click();
  });
});
