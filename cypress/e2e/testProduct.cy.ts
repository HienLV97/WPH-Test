import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
describe("Header", () => {
    beforeEach(function () {
        cy.fixture('Header').then(function (Header) {
            this.Header = Header;
        })
        cy.fixture('Url').then(function (Url) {
            this.Url = Url;
        })
        cy.fixture('example').then(function (bba) {
            this.bba = bba;
            cy.visit("/order", {
                auth: {
                    username: bba.id,
                    password: 'iamafriend'
                }
            })
            cy.viewport(1440, 786)
            cy.get('.cb-enable').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
        })
    })
    it("test arrow", function () {
        cy.viewport(1440, 786)
        cy.get('.ml-2')
            .should("be.visible")
            .should(([img]) => {
                expect(img.naturalWidth).to.equal(21);
                expect(img.naturalHeight).to.equal(20);
            })
            .should('have.css','width','20px')
            .should('have.css','height','20px')
    })
    
})
