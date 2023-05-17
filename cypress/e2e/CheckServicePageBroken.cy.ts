
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')
const newURL = [
    "/dissertation-writer",
    "/do-my-powerpoint"
]

describe("Test all links", () => {

    //  const links = ['/about-us','/signin']
    newURL.forEach((link) => {
        it(`Link: ${link}`, () => {
            cy.visit(`/${link}`).get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
            Cypress.on('uncaught:exception', (error) => {
                console.log(error)
                return false
            })
        })
        it(`button active: Place Your Order`, () => {
            cy.viewport(1440,760)
            cy.visit(`${link}`)
            cy.get('.p-service-mv__btn').click({force:true})
            cy.location("pathname").should("eq","/order")

        })
    })
})



// describe("Test all links", () => {
//     it(`Link:`, () => {
//     cy.visit("/dissertation-writer")
//     cy.
//     })
// })