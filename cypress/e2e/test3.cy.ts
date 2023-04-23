
import { stringify } from "gray-matter";
import { Html } from "next/document";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')
const newURL = [
    "/term-paper-vs-research-paper"
]

describe("Test all links", () => {
    //  const links = ['/about-us','/signin']
    newURL.forEach((link) => {
        it(`Link: ${link}`, () => {
            cy.visit(`/blog${link}`).get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
            Cypress.on('uncaught:exception', (error) => {
                console.log(error)
                return false
            })
            cy.get('html').as('hi')
            console.log('@hi')
            //  var html = 
            // cy.visit('/order')
            // cy.get(':nth-child(6) > .form-content > .form-control').type(html)
        })
   // cy.wrap(newURL).as('newURL1')
        // Cypress.env('textURL', newURL);
        // console.log('Hien1: '+newURL)

    })
})
