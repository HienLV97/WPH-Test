import "cypress-real-events";
import { forEach } from "lodash";
// Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
Cypress.config('baseUrl', 'https://writersperhour.com/')
const pagesNumbers = 24;
for (var page = 1; page <= pagesNumbers; page++) {
  (function (currentPage) {
    describe(`Page ${currentPage}`, () => {
      beforeEach(() => {
        cy.viewport(1440, 760);
        cy.visit(`/blog/page/${currentPage}`)
      })
      it("Link 1", () => {
        cy.get(':nth-child(1) > .item-link > .title').click({force: true})
          .get('title').should('not.contain', "Page Not Found - Writers Per Hour")
          .location("pathname").should("not.eq", `/blog/page/${currentPage}`)
      })
      it("Link 2", () => {
        cy.get(':nth-child(2) > .item-link > .title').click({force: true})
          .get('title').should('not.contain', "Page Not Found - Writers Per Hour")
          .location("pathname").should("not.eq", `/blog/page/${currentPage}`)
      })
      it("Link 3", () => {
        cy.get(':nth-child(3) > .item-link > .title').click({force: true})
          .get('title').should('not.contain', "Page Not Found - Writers Per Hour")
          .location("pathname").should("not.eq", `/blog/page/${currentPage}`)
      })
      it("Link 4", () => {
        cy.get(':nth-child(4) > .item-link > .title').click({force: true})
          .get('title').should('not.contain', "Page Not Found - Writers Per Hour")
          .location("pathname").should("not.eq", `/blog/page/${currentPage}`)
      })
      it("Link 5", () => {
        cy.get(':nth-child(5) > .item-link > .title').click({force: true})
          .get('title').should('not.contain', "Page Not Found - Writers Per Hour")
          .location("pathname").should("not.eq", `/blog/page/${currentPage}`)
      })
      it("Link 6", () => {
        cy.get(':nth-child(6) > .item-link > .title').click({force: true})
          .get('title').should('not.contain', "Page Not Found - Writers Per Hour")
          .location("pathname").should("not.eq", `/blog/page/${currentPage}`)
      })
    })
  })(page)
}
