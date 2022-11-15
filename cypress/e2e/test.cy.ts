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
            cy.visit("/", {
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
            cy.task('Matching image snapshot')
            cy.get('#header')
                .invoke('css', 'position', 'actual')
                .invoke('css', 'z-index', '9999')
                .matchImageSnapshot()
        })
        it("logined", function () {
            cy.get('#header')
                .invoke('css', 'position', 'actual')
                .invoke('css', 'z-index', '9999')
                .matchImageSnapshot()
            cy.get('.p-user-toolbar__a').click({ force: true })
            cy.get(':nth-child(2) > .layout-form__input-wrap > .layout-form__input')
                .type(this.bba.email).and
            cy.get(':nth-child(3) > .layout-form__input-wrap > .layout-form__input')
                .type(this.bba.passlogin)
            cy.get('.layout-form__btn').click({ force: true })
            cy.task('Matching image snapshot')
            cy.get('#header')
                .invoke('css', 'position', 'actual')
                .invoke('css', 'z-index', '9999')
                .matchImageSnapshot()
        })

    })

})
