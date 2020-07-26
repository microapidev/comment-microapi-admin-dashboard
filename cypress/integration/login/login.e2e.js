/// <reference types="cypress" />

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should redirect to the login page", () => {
    cy.url().should("include", "#/login");
  });

  it("should focus on username input", () => {
    cy.get("#username").should("be.focused");
  });

  it("should require username and password", () => {
    cy.get("#username-helper-text").should("not.exist");
    cy.get("#password-helper-text").should("not.exist");
    cy.get("#username").blur();
    cy.get("button[type=submit]").click();
    cy.get("#username-helper-text").should("contain.text", "Required");
    cy.get("#password-helper-text").should("contain.text", "Required");
  });
});
