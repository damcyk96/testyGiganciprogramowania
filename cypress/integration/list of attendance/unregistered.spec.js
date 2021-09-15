/// <reference types="Cypress" />

const account = {
  login: "damian.obajtek@gmail.com",
  password: "Giganci1234!@",
  fakePassword: "testtest123",
};

const pages = [
  "https://giganciprogramowaniaformularz.edu.pl/app/ListaObecnosci",
  "https://registration.codinggiants.es/app/ListaObecnosci",
  "https://registration.codinggiants.mx/app/ListaObecnosci",
  "https://registration.codinggiants.sk/app/ListaObecnosci",
  "https://registration.codinggiants.cl/app/ListaObecnosci",
  "https://registration.codinggiants.hr/app/ListaObecnosci",
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
