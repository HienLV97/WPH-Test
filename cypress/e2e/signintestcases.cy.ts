import { util } from "chai";
import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"


describe("home page", () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })
    it("Go to page", function(){
        cy.visit("/signup", {
            auth: {
                username: (this.data.id),
                password: 'iamafriend'
            }
        })
        cy.viewport(1440, 786)
    })
    it("Testcase", function () {
        cy.get('.cb-enable').click()
        // cy.get(':nth-child(3) > .layout-form__input-wrap > .layout-form__input').type(this.data.email)
        // cy.get(':nth-child(4) > .layout-form__input-wrap > .layout-form__input').type("1")
        // cy.get('.jsCheckPass').type(this.data.pass)
        // cy.get(':nth-child(2) > .c-checkbox1__label').click({ force: true })
        // cy.get('.layout-form__btn').click()
        // cy.get('.layout-form__btn').click()
    })
})