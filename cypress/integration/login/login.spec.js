/// <reference types="Cypress" />

const account = {
  login: "damian.obajtek@gmail.com",
  password: "Giganci1234!@",
  fakePassword: "testtest123",
};

const pages = [
  "https://giganciprogramowaniaformularz.edu.pl/app/",
  "https://registration.codinggiants.es/app/",
  "https://registration.codinggiants.mx/app/",
  "https://registration.codinggiants.sk/app/",
  "https://registration.codinggiants.cl/app/",
  "https://registration.codinggiants.hr/app/",
];

beforeEach(() => {
  cy.viewport(1920, 1080);
});

pages.forEach((page) => {
  context(`Try to login with correct data on ${page}`, () => {
    describe("should visit webpage", () => {
      it("visit webpage", () => {
        cy.visit(page + "Login");
        cy.wait(500);
      });
      it("try login", function () {
        cy.visit(page + "Login");

        cy.get("#mat-input-0").type(account.login);
        cy.get("[type ='password']").type(account.password);
        cy.get("[type ='submit']").click();
        cy.wait(500);
      });

      it("should be url with panel", () => {
        cy.url().should("eq", page + "Panel");
      });
    });
  });
  context(`Try to login with fake data on ${page}`, () => {
    describe("should visit webpage", () => {
      it("visit webpage", () => {
        cy.visit(page + "Login");
        cy.wait(500);
      });
      it("try login", function () {
        cy.visit(page + "Login");

        cy.get("#mat-input-0").type(account.login);
        cy.get("[type ='password']").type(account.fakePassword);
        cy.get("[type ='submit']").click();
        cy.wait(500);
      });
      it("should be visible info about wrong data and click ok", () => {
        cy.get("app-error-dialog.ng-star-inserted");
        cy.get(".mat-dialog-actions > .button").click();
      });
      it("should check correct url after clicking OK", () => {
        cy.url().should("eq", page + "Login");
      });
    });
  });
});
