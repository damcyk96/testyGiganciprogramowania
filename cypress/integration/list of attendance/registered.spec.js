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
        cy.get("[type ='password']").type(account.fakePassword);
        cy.get("[type ='submit']").click();
        cy.wait(500);
        });
        it('should click link to list of attendance from menu and check link', ()=>{
          cy.get('.nav > :nth-child(1) > .nav-link > p').click()
          cy.wait(5000);
          cy.url().should("eq", page + "ListaObecnosci");
        })
      });
    });
  });
  