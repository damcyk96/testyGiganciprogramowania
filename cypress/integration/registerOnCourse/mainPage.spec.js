/// <reference types="Cypress" />

const page = "https://www.giganciprogramowania.edu.pl/"

beforeEach(() => {
  cy.viewport(1920, 1080);
});


  context(`Try to register on course`, () => {
    describe("should visit webpage", () => {
      it("should click courses link from menu and check url", () => {
        cy.visit(page);

        cy.get(".d-flex > .btn--big-text").click();
        cy.get(
          ":nth-child(1) > .courses-type-column > .list-reset > :nth-child(1) > .w-full"
        ).click();
        cy.get(
          ".registration-courses-types__decision-tree > :nth-child(1) > .registration-btn"
        ).click();
        cy.get(".search-input__input").type("Biel");
        cy.get("#registration-step-choose-location").click();
      });
    });
  });

