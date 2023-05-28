import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
Cypress.config('baseUrl', 'https://www.paperwritings.com/')
describe("Test URL", () => {
    it(`Check url`, () => {
        cy.viewport(1440, 768)
        cy.visit("/auth/orders/")
        cy.contains("Register now").click({force:true})
        cy.get('#input_name').type("abkashdkfj ajsdhfkajsd")
        cy.get('#input_email').type("kynzac@gmail.com")
        cy.get('#registration_form > .form-check > .form-check-input').click({force:true})
        cy.get('#registration_form > .btn-form-box > .btn-custom').click({force:true})
    })
})