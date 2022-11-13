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
it("Our Writers", function () {
    cy.contains('Our Writers').realHover().should('have.css', 'color', 'rgb(215, 34, 38)')
        .wait(3000)


    // cy.get('.p-nav__list > :nth-child(1) > a').contains("Our Writers").click({force: true}) 
    // cy.location("pathname").should("eq",this.Header.UrlOurWriters)         

})
it("check color incase not hover", function () {
    cy.get('.p-nav__list > :nth-child(1)')
        .should('have.css', 'padding', '0px 24px')
        .wait(3000)
})
it.only("check color incase not hover", function () {
    cy.get('.p-nav__list > :nth-child(1').realHover()
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'padding', '0px 24px')
        .should('have.css', 'font-family', '"Open Sans", sans-serif')
        .wait(3000)
})

it("How It Works", function () {
    cy.get('.p-header-btn__order').realHover()
    cy.get('.p-header-btn__order').realHover().should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('.p-header-btn__order').realHover().should('have.css', 'font-size', '16px')
    cy.get('.p-header-btn__order').realHover().should('have.css', 'font-weight', '600')
    cy.get('.p-header-btn__order').realHover().should('have.css', 'padding', '0 24px')
    cy.get('.p-header-btn__order').realHover().should('have.css', 'font-family', '"Open Sans", sans-serif')
    cy.get('.p-header-btn__order').realHover().wait(3000)
    cy.get('.p-header-btn__order').realHover().clearCookies()
})
it("Our Writers", function () {


    cy.get('.p-nav__list > :nth-child(1) > a').contains("Our Writers").click({ force: true })
    cy.location("pathname").should("eq", this.Header.UrlOurWriters)

})


            // context("How It Works", function () {
            //     it("Check Text-color ", function () {
            //         cy.get('.p-nav__list > :nth-child(2)>a')
            //             .should('have.css', 'color', this.Header.TextC3a3a3a)
            //     })
            //     it("Check background-color ", function () {
            //         cy.get('.p-nav__list > :nth-child(1)')
            //             .should('have.css', 'background-color', this.Header.BGFFF)
            //     })
            //     it("Check font-weight ", function () {
            //         cy.get('.p-nav__list > :nth-child(1)>a')
            //             .should('have.css', 'font-weight', this.Header.FontWeight)
            //     })
            //     it("Check font-size ", function () {
            //         cy.get('.p-nav__list > :nth-child(1)')
            //             .should('have.css', 'font-size', this.Header.FontSizeL)
            //     })
            //     it("Check padding ", function () {
            //         cy.get('.p-nav__list > :nth-child(1)')
            //             .should('have.css', 'padding', this.Header.Padding)

            //     })
            //     it("Check font-family ", function () {
            //         cy.get('.p-nav__list > :nth-child(1)')
            //             .should('have.css', 'font-family', this.Header.Fontfamily)
            //     })
            //     it("Check hover mouse ", function () {
            //         cy.get('.p-nav__list > :nth-child(1)').contains("Our Writers")
            //             .realHover()
            //             .should('have.css', 'color', this.Header.hovermouseD72226)
            //             .should('have.css', 'font-weight', this.Header.FontWeight)
            //             .should('have.css', 'font-size', this.Header.FontSizeL)
            //             .should('have.css', 'padding', this.Header.Padding)
            //             .should('have.css', 'font-family', this.Header.Fontfamily)
            //     })
            // })