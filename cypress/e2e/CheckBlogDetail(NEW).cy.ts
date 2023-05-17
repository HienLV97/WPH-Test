import "cypress-real-events";
import { forEach } from "lodash";
Cypress.config('baseUrl','https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')
const pagesNumbers = 21;
for (var page = 1; page <= pagesNumbers; page++) {
  (function (currentPage) {
    describe(`Page ${currentPage}`, () => {
      beforeEach(() => {
        cy.viewport(1440, 760);
        cy.visit(`/blog/page/${currentPage}`);
      })
      it("Link 1", () => {
        cy.viewport(1440, 760);
        cy.getClass('item-link').eq(0).click()
        cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist");
      })
      it("Link 2", () => {
        cy.viewport(1440, 760);
        cy.getClass('item-link').eq(1).click()
        cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist");
      })
      it("Link 3", () => {
        cy.viewport(1440, 760);
        cy.getClass('item-link').eq(2).click()
        cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist");
      })
      it("Link 4", () => {
        cy.viewport(1440, 760);
        cy.getClass('item-link').eq(3).click()
        cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist");
      })
      it("Link 5", () => {
        cy.viewport(1440, 760);
        cy.getClass('item-link').eq(4).click()
        cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist");
      })
      it("Link 6", () => {
        cy.viewport(1440, 760);
        cy.get('.item-link').eq(5).click()
        cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist");
      })
    })
  })(page)
}
