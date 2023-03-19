import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')


describe('Test all links on the homepage', () => {
    it('Check all links', () => {

        cy.viewport(1440, 812)
        cy.visit('/essay-writers')
        Cypress.on('uncaught:exception', (error) => {
            // do something with the error, such as logging it or displaying a message to the user
            console.log(error)
            return false
        })

        cy.get('a').each(($link) => {
            console.log($link)
            var newURL = $link.prop('href')
            console.log(newURL)
            if (newURL != "javascript:void(0)") {

                var URLbase = "https://kamora:iamafriend@"
                // var a = "https://writersperhour.dev/singup"
                var test1 = newURL.replace("https://", "")
                console.log(test1)
                test1 = URLbase + test1
                console.log(test1)
                cy.visit(test1)
                cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")
            }
        })
    })
})



// })