import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
describe("Header", () => {
    beforeEach(function () {
        cy.visit('/')
        cy.viewport(1440, 786)
        cy.get('.cb-enable').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
})
context("Test", function () {
    it('basic-tester', () => {
        cy.visit('/signup')
    })
})