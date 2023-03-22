import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
function getURL(getUrl) {
    cy.visit('/')
    cy.get('a').each(($link) => {
        console.log($link)
        var newURL = $link.prop('href')
        // console.log(newURL)
        // cy.wrap(newURL).as('newURL1')
        // Cypress.env('textURL', newURL);
        // console.log('Hien1: '+newURL)
    })
}



function checkLink() {
    cy.visit('/')
   return cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")

}
// const newURL = ["/signin", "/:buy-capstone-project", "/order"]

it("text", ()=>{
    cy.visit("/")
    cy.viewport(1440,821)
    // checkLink()
    console.log(getURL())
})