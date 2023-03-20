import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
function checkLink(link){
    cy.visit('/')
    cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")
    
}
const newURL = ["/signin","/signup","/order"] 

 describe("Test all links", () => {
    //  const links = ['/about-us','/signin']
    newURL.forEach((link) => {
         it(`URL should contain ${link}`, () => {
             console.log(link)
             cy.wrap(link).as('url')
             checkLink(link)
         })
     })
 })
 