/// <reference types="Cypress" />

const correctAccount = {
  login: "damian.obajtek@gmail.com",
  password: "Giganci1234!@",
};

const pages = [
  "https://giganciprogramowaniaformularz.edu.pl/app/StatusZapisow",
  "https://registration.codinggiants.es/app/StatusZapisow",
  "https://registration.codinggiants.mx/app/StatusZapisow",
  "https://registration.codinggiants.sk/app/StatusZapisow",
  "https://registration.codinggiants.cl/app/StatusZapisow",
  "https://registration.codinggiants.hr/app/StatusZapisow",
];

beforeEach(() => {
  cy.viewport(1920, 1080);
});

pages.forEach((page) => {
  context(
    `Try to check list of attendance using unregistered user on ${page}`,
    () => {
      describe("should visit webpage", () => {
        it("visit webpage", () => {
          cy.visit(page);
          cy.wait(500);
        });
        let clearPage = page.split("/");
        clearPage.pop();
        let loginPage = clearPage.join("/");
        loginPage = loginPage + "/Login";
        it("should not be a basic url", () => {
          cy.url().should("not.be.a", page);
        });
        it("should be equal to loginPage", () => {
          cy.url().should("eq", loginPage);
        });
      });
    }
  );
});
