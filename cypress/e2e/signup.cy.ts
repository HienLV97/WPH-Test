// import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"
// import { example } from "fixture"
//làm lại

describe("home page", () => {
    beforeEach(function () {
        cy.fixture('example.json').as('exampleData');
        cy.visit("/signup", {
            auth: {
                username: this.exampleData.id,
                password: 'iamafriend'
            }
        })
    });

    // it("Test something", function () {
    //     cy.visit("/signup", {
    //         auth: {
    //             username: this.exampleData.id,
    //             password: 'iamafriend'
    //         }
    //     })
    // })
    context("the h1 contains the correct text", function () {
        it("the h1 contains the correct text", function () {
            cy.get('.button').click()
            cy.viewport(1440, 786)

            // cy.get('.cb-enable').click()
            // cy.get(':nth-child(3) > .layout-form__input-wrap > .layout-form__input').type(this.bba.email)
            // cy.get(':nth-child(4) > .layout-form__input-wrap > .layout-form__input').type("1")
            // cy.get('.jsCheckPass').type("111111")
            // cy.get(':nth-child(2) > .c-checkbox1__label').click( {force: true})
            // cy.get('.layout-form__btn').click()
            // cy.get('.layout-form__btn').click()
        })
    })
})