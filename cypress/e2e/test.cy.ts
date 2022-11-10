import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"


describe("home page", () => {
    beforeEach(function () {
        cy.fixture('WPH').then(function (WPH) {
            this.WPH = WPH;
        })
        cy.fixture('example').then(function (bba) {
            this.bba = bba;
            cy.visit("/signup", {
                auth: {
                    username: bba.id,
                    password: 'iamafriend'
                }
            })
        cy.viewport(1440, 786)
        cy.get('.cb-enable').click()
        })
    })
    it("the h1 contains the correct text", function () {

        cy.get(':nth-child(3) > .layout-form__input-wrap > .layout-form__input').type(this.bba.email)
        cy.get(':nth-child(4) > .layout-form__input-wrap > .layout-form__input').type("1")
        cy.get('.jsCheckPass').type(this.bba.pass)
        cy.get(':nth-child(2) > .c-checkbox1__label').click({ force: true })
        cy.get('.layout-form__btn').click()
        // cy.get('.layout-form__btn').click()
    })
    it("retest", function () {
        cy.get(':nth-child(3) > .layout-form__input-wrap > .layout-form__input').type(this.WPH.pass)
        cy.get(':nth-child(4) > .layout-form__input-wrap > .layout-form__input').type("2")
    })
})
