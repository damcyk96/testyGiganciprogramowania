/// <reference types="Cypress" />

const correctAccount = {
  login: "damian.obajtek@gmail.com",
  password: "Giganci1234!@",
};

//problem z pl wersja
const pages = [
  "https://codinggiants.es",
  "https://codinggiants.mx",
  "https://codinggiants.sk",
  "https://codinggiants.cl",
  "https://codinggiants.hr",
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
          cy.wait(300);
        });
        it("should click courses link from menu and check url", () => {
          cy.get(".d-flex > .nav > .item-117 > a").click();
          cy.wait(1000);
          cy.url().should("not.be.a", page);
        });
        it("should find course filter option", () => {
          //ulepszyć ton
          cy.get(".course-row");
          for (let i = 1; i <= 5; i++) {
            cy.get(`:nth-child(${i}) > .courses-filters__button`).click();
            cy.get(".course-row");
            cy.get(`:nth-child(${i}) > .courses-filters__button`).click();
          }
        });
      });
    }
  );
});
