import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"


describe("home page", () => {
    beforeEach(function () {
        cy.fixture('Header').then(function (Header) {
            this.Header = Header;
        })
        cy.fixture('example').then(function (bba) {
            this.bba = bba;
            
            cy.viewport(1440, 786)
           
        })
    })
    context("test", function () {
        it("test1", function () {
            cy.visit("/a", {
                auth: {
                    username: this.bba.id,
                    password: 'iamafriend'
                }
            })
            cy.get('.cb-enable').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
        })
    })
})
