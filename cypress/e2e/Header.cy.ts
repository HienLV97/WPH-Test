import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
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
            cy.get('.p-nav__list > :nth-child(1)').contains("Our Writers").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlOurWriters)
        })
        it("How It Works", function () {
            cy.get('.p-nav__list > :nth-child(2)').contains("How It Works").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlHowItWorks)
        })
        it("Prices & Discounts", function () {
            cy.get('.p-nav__list > :nth-child(3)').contains("Prices & Discounts").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlPandD)
        })
        it("Samples", function () {
            cy.get('.p-nav__list > :nth-child(4)').contains("Samples").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlSample)
        })
        it("About Us active", function () {
            cy.get('.p-nav__list > :nth-child(5)').contains("About Us").click({ force: true })
        })
        it("FAQ", function () {
            cy.get('.p-user-toolbar__list > :nth-child(1)').contains("FAQ").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlFAQ)
        })
        it("Blogs", function () {
            cy.get('.p-user-toolbar__list > :nth-child(2)').contains("Blogs").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlBlogs)
        })
        it("Contact", function () {
            cy.get('.p-user-toolbar__list > :nth-child(3)').contains("Contact").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlContact)
        })
        it("[Sign In] button", function () {
            cy.get('.p-user-toolbar__a').contains("Sign in").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlSignin)
        })
        it("[Order Now] button", function () {
            cy.get('.p-header-btn__order').contains("Order Now").click({ force: true })
            cy.location("pathname").should("eq", this.Header.UrlOrder)
        })
    })
    context("Check UI", function () {
        context("Our Writers", function () {
            it("Check Text-color ", function () {
                cy.get('.p-nav__list > :nth-child(2)>a')
                    .should('have.css', 'color', this.Header.TextC3a3a3a)
            })
            it("Check background-color ", function () {
                cy.get('.p-nav__list > :nth-child(1)')
                    .should('have.css', 'background-color', this.Header.BGFFF)
            })
            it("Check font-weight ", function () {
                cy.get('.p-nav__list > :nth-child(2)>a')
                    .should('have.css', 'font-weight', this.Header.FontWeight)
            })
            it("Check font-size ", function () {
                cy.get('.p-nav__list > :nth-child(1)')
                    .should('have.css', 'font-size', this.Header.FontSizeL)
            })
            it("Check padding ", function () {
                cy.get('.p-nav__list > :nth-child(1)')
                    .should('have.css', 'padding', this.Header.Padding)

            })
            it("Check font-family ", function () {
                cy.get('.p-nav__list > :nth-child(1)')
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
            it("Check hover mouse ", function () {
                cy.get('.p-nav__list > :nth-child(1)')
                    .realHover().and('have.css', 'padding', this.Header.Padding)
                    .contains("Our Writers")
                    .should('have.css', 'color', this.Header.hovermouseD72226)
                    // .realHover().and('have.css', 'padding', this.Header.Padding)
                    // .contains("Our Writers")
                    // .should('have.css', 'color', this.Header.hovermouseD72226)
                    .should('have.css', 'font-weight', this.Header.FontWeight)
                    .should('have.css', 'font-size', this.Header.FontSizeL)
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
        })
        context("How It Works", function () {
            it("Check Text-color ", function () {
                cy.get('.p-nav__list > :nth-child(2)>a')
                    .should('have.css', 'color', this.Header.TextC3a3a3a)
            })
            it("Check background-color ", function () {
                cy.get('.p-nav__list > :nth-child(2)')
                    .should('have.css', 'background-color', this.Header.BGFFF)
            })
            it("Check font-weight ", function () {
                cy.get('.p-nav__list > :nth-child(2)>a')
                    .should('have.css', 'font-weight', this.Header.FontWeight)
            })
            it("Check font-size ", function () {
                cy.get('.p-nav__list > :nth-child(2)')
                    .should('have.css', 'font-size', this.Header.FontSizeL)
            })
            it("Check padding ", function () {
                cy.get('.p-nav__list > :nth-child(2)')
                    .should('have.css', 'padding', this.Header.Padding)

            })
            it("Check font-family ", function () {
                cy.get('.p-nav__list > :nth-child(2)')
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
            it("Check hover mouse ", function () {
                cy.get('.p-nav__list > :nth-child(2)')
                    .realHover().and('have.css', 'padding', this.Header.Padding)
                    .contains("How It Works")
                    .should('have.css', 'color', this.Header.hovermouseD72226)
                    .should('have.css', 'font-weight', this.Header.FontWeight)
                    .should('have.css', 'font-size', this.Header.FontSizeL)
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
        })
        context("Prices & Discounts", function () {
            it("Check Text-color ", function () {
                cy.get('.p-nav__list > :nth-child(3)>a')
                    .should('have.css', 'color', this.Header.TextC3a3a3a)
            })
            it("Check background-color ", function () {
                cy.get('.p-nav__list > :nth-child(3)')
                    .should('have.css', 'background-color', this.Header.BGFFF)
            })
            it("Check font-weight ", function () {
                cy.get('.p-nav__list > :nth-child(3)>a')
                    .should('have.css', 'font-weight', this.Header.FontWeight)
            })
            it("Check font-size ", function () {
                cy.get('.p-nav__list > :nth-child(3)')
                    .should('have.css', 'font-size', this.Header.FontSizeL)
            })
            it("Check padding ", function () {
                cy.get('.p-nav__list > :nth-child(3)')
                    .should('have.css', 'padding', this.Header.Padding)

            })
            it("Check font-family ", function () {
                cy.get('.p-nav__list > :nth-child(3)')
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
            it("Check hover mouse ", function () {
                cy.get('.p-nav__list > :nth-child(3)')
                    .realHover().and('have.css', 'padding', this.Header.Padding)
                    .contains("Prices & Discounts")
                    .should('have.css', 'color', this.Header.hovermouseD72226)
                    .should('have.css', 'font-weight', this.Header.FontWeight)
                    .should('have.css', 'font-size', this.Header.FontSizeL)
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
        })
        context("Samples", function () {
            it("Check Text-color ", function () {
                cy.get('.p-nav__list > :nth-child(4)>a')
                    .should('have.css', 'color', this.Header.TextC3a3a3a)
            })
            it("Check background-color ", function () {
                cy.get('.p-nav__list > :nth-child(4)')
                    .should('have.css', 'background-color', this.Header.BGFFF)
            })
            it("Check font-weight ", function () {
                cy.get('.p-nav__list > :nth-child(4)>a')
                    .should('have.css', 'font-weight', this.Header.FontWeight)
            })
            it("Check font-size ", function () {
                cy.get('.p-nav__list > :nth-child(4)')
                    .should('have.css', 'font-size', this.Header.FontSizeL)
            })
            it("Check padding ", function () {
                cy.get('.p-nav__list > :nth-child(4)')
                    .should('have.css', 'padding', this.Header.Padding)

            })
            it("Check font-family ", function () {
                cy.get('.p-nav__list > :nth-child(4)')
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
            it("Check hover mouse ", function () {
                cy.get('.p-nav__list > :nth-child(4)')
                    .realHover().and('have.css', 'padding', this.Header.Padding)
                    .contains("Samples")
                    .should('have.css', 'color', this.Header.hovermouseD72226)
                    .should('have.css', 'font-weight', this.Header.FontWeight)
                    .should('have.css', 'font-size', this.Header.FontSizeL)
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
        })
        context("About Us", function () {
            it("About Us active", function () {
                cy.get('.p-nav__list > :nth-child(5)').contains("About Us").click({ force: true })
            })
            it("Check Text-color ", function () {
                cy.get('.js-dropdow > a')
                    .should('have.css', 'color', this.Header.TextC3a3a3a)
            })
            it("Check background-color ", function () {
                cy.get('.p-nav__list > :nth-child(5)')
                    .should('have.css', 'background-color', this.Header.BGFFF)
            })
            it("Check font-weight ", function () {
                cy.get('.js-dropdow > a')
                    .should('have.css', 'font-weight', this.Header.FontWeight)
            })
            it("Check font-size ", function () {
                cy.get('.p-nav__list > :nth-child(5)')
                    .should('have.css', 'font-size', this.Header.FontSizeL)
            })
            it("Check padding ", function () {
                cy.get('.p-nav__list > :nth-child(5)')
                    .should('have.css', 'padding', this.Header.Padding)

            })
            it("Check font-family ", function () {
                cy.get('.p-nav__list > :nth-child(5)')
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
            it("Check hover mouse ", function () {
                cy.get('.p-nav__list > :nth-child(5)')
                    .realHover().and('have.css', 'padding', this.Header.Padding)
                    .contains("About Us")
                    .should('have.css', 'color', this.Header.hovermouseD72226)
                    .should('have.css', 'font-weight', this.Header.FontWeight)
                    .should('have.css', 'font-size', this.Header.FontSizeL)
                    .should('have.css', 'font-family', this.Header.Fontfamily)
            })
        })
        context.only("Insite FAQ", function () {
            beforeEach("Click dropdown", function () {
                cy.get('.js-dropdow').contains("About Us").click({ force: true })
            })
            context("FAQ", function () {
                it("Check Text-color ", function () {
                    cy.get('.js-dropdow > a')
                        .should('have.css', 'color', this.Header.TextC3a3a3a)
                })
                it("Check background-color ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(1)')
                        .should('have.css', 'background-color', this.Header.BGFFF)
                })
                it("Check font-weight ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(1) > a')
                        .should('have.css', 'font-weight', this.Header.FontWeight)
                })
                it("Check font-size ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(1)')
                        .should('have.css', 'font-size', this.Header.FontSizeL)
                })
                it("Check padding ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(1)>a')
                        .should('have.css', 'padding', this.Header.PaddingAboutUs)

                })
                it("Check font-family ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(1)')
                        .should('have.css', 'font-family', this.Header.Fontfamily)
                })
                it("Check hover mouse ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(1) > a')
                        .realHover()
                        .should('have.css', 'color', this.Header.hovermouseD72226)
                        .and('have.css', 'padding', this.Header.PaddingAboutUs)
                        .contains("FAQ")
                        .should('have.css', 'font-weight', this.Header.FontWeight)
                        .should('have.css', 'font-size', this.Header.FontSizeL)
                        .should('have.css', 'font-family', this.Header.Fontfamily)
                })
            })
            context("Blogs", function () {
                it("Check Text-color ", function () {
                    cy.get('.js-dropdow > a')
                        .should('have.css', 'color', this.Header.TextC3a3a3a)
                })
                it("Check background-color ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(2)')
                        .should('have.css', 'background-color', this.Header.BGFFF)
                })
                it("Check font-weight ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(2) > a')
                        .should('have.css', 'font-weight', this.Header.FontWeight)
                })
                it("Check font-size ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(2)')
                        .should('have.css', 'font-size', this.Header.FontSizeL)
                })
                it("Check padding ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(2)>a')
                        .should('have.css', 'padding', this.Header.PaddingAboutUs)

                })
                it("Check font-family ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(2)')
                        .should('have.css', 'font-family', this.Header.Fontfamily)
                })
                it("Check hover mouse ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(2) > a')
                        .realHover()
                        .should('have.css', 'color', this.Header.hovermouseD72226)
                        .and('have.css', 'padding', this.Header.PaddingAboutUs)
                        .contains("Blogs")
                        .should('have.css', 'font-weight', this.Header.FontWeight)
                        .should('have.css', 'font-size', this.Header.FontSizeL)
                        .should('have.css', 'font-family', this.Header.Fontfamily)
                })
            })
            context("Contact", function () {
                it("Check Text-color ", function () {
                    cy.get('.js-dropdow > a')
                        .should('have.css', 'color', this.Header.TextC3a3a3a)
                })
                it("Check background-color ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(3)')
                        .should('have.css', 'background-color', this.Header.BGFFF)
                })
                it("Check font-weight ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(3) > a')
                        .should('have.css', 'font-weight', this.Header.FontWeight)
                })
                it("Check font-size ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(3)')
                        .should('have.css', 'font-size', this.Header.FontSizeL)
                })
                it("Check padding ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(3)>a')
                        .should('have.css', 'padding', this.Header.PaddingAboutUs)

                })
                it("Check font-family ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(3)')
                        .should('have.css', 'font-family', this.Header.Fontfamily)
                })
                it("Check hover mouse ", function () {
                    cy.get('.p-user-toolbar__list > :nth-child(3) > a')
                        .realHover()
                        .should('have.css', 'color', this.Header.hovermouseD72226)
                        .and('have.css', 'padding', this.Header.PaddingAboutUs)
                        .contains("Contact")
                        .should('have.css', 'font-weight', this.Header.FontWeight)
                        .should('have.css', 'font-size', this.Header.FontSizeL)
                        .should('have.css', 'font-family', this.Header.Fontfamily)
                })
            })

        })
    })
})




