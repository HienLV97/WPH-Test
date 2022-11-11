import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
describe("Header", () => {
    beforeEach(function () {
        cy.fixture('Header').then(function (Header) {
            this.Header = Header;
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
    context("Link Active", function () {
        it("Our Writers", function () {
            cy.contains('Our Writers').realHover().should('have.css', 'color', 'rgb(215, 34, 38)')
            .wait(3000)


            // cy.get('.p-nav__list > :nth-child(1) > a').contains("Our Writers").click({force: true}) 
            // cy.location("pathname").should("eq",this.Header.UrlOurWriters)         

        })
        it("check color incase not hover", function () {
            cy.get('.p-header-btn__order')
                .should('have.css', 'background-color', 'rgb(215, 34, 38)')
                .wait(3000)
        })
       
        it("How It Works", function () {
            cy.get('.p-header-btn__order').realHover()
                .should('have.css', 'background-color', 'rgb(255, 255, 255)')
                .wait(3000)
                .clearCookies()
        })
        it("Our Writers", function () {
           

            cy.get('.p-nav__list > :nth-child(1) > a').contains("Our Writers").click({force: true}) 
            cy.location("pathname").should("eq",this.Header.UrlOurWriters)         

        })
        // it("How It Works", function () {
        //     cy.get('.p-nav__list > :nth-child(2) > a').contains("How It Works").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlHowItWorks)
        // })
        // it("Prices & Discounts", function () {
        //     cy.get('.p-nav__list > :nth-child(3) > a').contains("Prices & Discounts").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlPandD)
        // })
        // it("Samples", function () {
        //     cy.get('.p-nav__list > :nth-child(4) > a').contains("Samples").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlSample)
        // })
        // it("About Us active", function () {
        //     cy.get('.p-nav__list > :nth-child(5)').contains("About Us").click({ force: true })

        // })
        // it("FAQ", function () {
        //     cy.get('.p-user-toolbar__list > :nth-child(1)').contains("FAQ").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlFAQ)
        // })
        // it("Blogs", function () {
        //     cy.get('.p-user-toolbar__list > :nth-child(2)').contains("Blogs").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlBlogs)
        // })
        // it("Contact", function () {
        //     cy.get('.p-user-toolbar__list > :nth-child(3)').contains("Contact").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlContact)
        // })
        // it("[Sign In] button", function () {
        //     cy.get('.p-user-toolbar__a').contains("Sign in").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlSignin)
        // })
        // it("[Order Now] button", function () {
        //     cy.get('.p-header-btn__order').contains("Order Now").click({ force: true })
        //     cy.location("pathname").should("eq", this.Header.UrlOrder)
        // })

    })
})
