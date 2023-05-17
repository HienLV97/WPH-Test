import "cypress-real-events";
import { forEach } from "lodash";
Cypress.config('baseUrl',
    'https://kamora:iamafriend@writersperhour.dev/')
describe("test", () => {
    context("Test link blog detail broken", () => {
        // const pagesNumbers = 20;
        // for (var page = 0; page < pagesNumbers; page++) {
            it(`Page ${1}`, () => {
                // console.log(page)
                cy.viewport(1440, 900)
                cy.visit(`/blog/page/${1}`)
                cy.getClass('item-link').eq(0).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.visit(`/blog/page/${page}`)
                // cy.getClass('item-link').eq(1).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.visit(`/blog/page/${page}`)
                // cy.getClass('item-link').eq(2).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.visit(`/blog/page/${page}`)
                // cy.getClass('item-link').eq(3).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.visit(`/blog/page/${page}`)
                // cy.getClass('item-link').eq(4).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.visit(`/blog/page/${page}`)
                // cy.getClass('item-link').eq(5).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
            })
        // }
    })
})
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.getClass('item-link').eq(1).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.getClass('item-link').eq(2).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.getClass('item-link').eq(3).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.getClass('item-link').eq(4).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
                // cy.getClass('item-link').eq(5).click()
                // cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")

        // it("Page 1", () => {
        //     cy.viewport(1440, 900)
        //     cy.visit(`/blog/pages/${pages}`)
        //     cy.getClass('item-link').eq(0).click()
        //     cy.get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
        //     // Cypress.on('uncaught:exception', (error) => {
        //     //     console.log(error)
        //     //     return false
        //     // })
        // })

