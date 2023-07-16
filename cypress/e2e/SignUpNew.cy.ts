import "cypress-real-events";
import { TestcaseForInvalidEmail, ValidEmail, ValidPassword } from "../e2e/constants1.js";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')

describe("home page", () => {
    beforeEach(() => {
        cy.fixture('example.json').as('exampleData');
        cy.fixture('example.json').as('exampleData');
        cy.viewport(1440, 760);
        cy.visit("/signup")
    })
    context("Negative", function () {
        it("From '/signin'", function () {
            cy.visit("/signin")
            cy.contains("Sign Up")
                .click()
                .get("h1")
                .contains("SIGN UP")
        })
        it("By URL", function () {
            cy.get("h1")
                .contains("SIGN UP")
        })
    })
    context("Invaild Email:", function () {
        TestcaseForInvalidEmail.forEach((value) => {
            it(`${value.description}`, () => {
                cy.getPlaceHolder("Email").type(`${value.email}`)
                cy.getPlaceHolder("Password").type("123123")
                cy.get('.button')
                .click({ force: true })
                // cy.wait(5000)
                cy.getClass("text-error").eq(0)
                    .should("contain", "The email must be a valid email address.")
            })
        })
    })
    it('Copy in textbox1 and paste in textbox2', () => {
        cy.document().then((doc) => cy.spy(doc, 'execCommand').as('execCommand'))
        cy.get(':nth-child(1) > div > .input-text').type('123')
        cy.get(':nth-child(1) > div > .input-text').invoke('val').then(($temp) => {
            const txt = $temp
            cy.get(':nth-child(2) > div > .input-text').focus()
            cy.document().invoke('execCommand', 'paste')
            cy.get(':nth-child(2) > div > .input-text').type(`${txt}`)
        })
    })
    context("Valid email", function () {
        ValidEmail.forEach((value) => {
            it(`Input email:` + ` ${value}`, () => {
                cy.getPlaceHolder("Email")
                    .type(`${value}`)
                cy.getPlaceHolder("Password").type("123123")
                cy.getClass("label-checkbox").click({ focus: true })
                cy.get('.button')
                    .click()
                cy.wait(4000)
                cy.get("div,[class='sc-4db11891-2 fLSjyi p-balance']")
                    .contains("Balance")
                cy.get('.sc-4db11891-2 > span')
                    .should("not.contain.text", "NaN")
            })
        })
    })
})
