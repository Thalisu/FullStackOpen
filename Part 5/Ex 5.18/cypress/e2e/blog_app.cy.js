describe("Blog app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3003");
    cy.contains("Login").click();
  });

  it("succeeds with correct credentials", function () {
    cy.get("input:first").type("Thalisins");
    cy.get("input:last").type("123456");
    cy.contains("login").click();
    cy.contains("logged in").click();
  });
  it("fails with wrong credentials", function () {
    cy.get("input:first").type("Thalisins");
    cy.get("input:last").type("1234");
    cy.contains("login").click();
    cy.contains("wrong credentials");
  });
  describe("when logged in", function () {
    beforeEach(function () {
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
  });
});
