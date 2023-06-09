import "cypress-real-events";
import { InvalidEmail,ValidEmail, ValidPassword } from "../e2e/constants1.js";
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
    context("Invalid email", function () {
        InvalidEmail.forEach((value) => {
            it(`Input email: ${value}`, () => {
                cy.getPlaceHolder("Email").type(`${value}`)
                cy.getPlaceHolder("Password").type("123123")
                cy.getType("submit").click()
                cy.getClass("text-error").eq(0)
                    .should("contain", "The email must be a valid email address")
            })
        })
    })
    context.only("Valid email", function () {
        ValidEmail.forEach((value) => {
            it(`Input email: ${value}`, () => {
                cy.getPlaceHolder("Email")
                    .type(`${value}`)
                cy.getPlaceHolder("Password").type("123123")
                cy.getClass("label-checkbox").click({ focus: true })
                cy.getType("submit").click()
                cy.contains("Balance")
            })
        })
    })
})
