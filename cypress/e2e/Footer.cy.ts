import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"

describe("Header", () => {
    beforeEach(function () {
        cy.fixture('footer').then(function (Header) {
            this.Header = Header;
        })
        cy.fixture('example').then(function (data) {
            this.data = data;
            cy.visit("/order", {
                auth: {
                    username: data.id,
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
    context("Link Active", function () {
        it("Privacy Policy", function () {
            cy.get(':nth-child(1) > .d-block').contains("Privacy Policy").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlPP)
        })
        it("Refund Policy", function () {
            cy.get(':nth-child(2) > .d-block').contains("Refund Policy").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlRefundP)
        })
        it("Cookie Policy", function () {
            cy.get(':nth-child(3) > .d-block').contains("Cookie Policy").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlCP)
        })
        it("Revision Policy", function () {
            cy.get(':nth-child(4) > .d-block').contains("Revision Policy").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlRevisionP)
        })
        it("Terms of use", function () {
            cy.get(':nth-child(5) > .d-block').contains("Terms of use").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlToU)
        })
    })
})
