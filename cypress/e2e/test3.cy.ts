import "cypress-real-events";
import { InvalidEmail, ValidEmail } from "../e2e/constants1.js";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')

describe("home page", () => {
    // beforeEach(() => {
    //     cy.fixture('example.json').as('exampleData');
    //     cy.fixture('example.json').as('exampleData');
    //     cy.viewport(1440, 760);
    // })
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
                cy.getPlaceHolder("Email")
                    .type(`${value}`)
                cy.getPlaceHolder("Password")
                    .type("123123")
                cy.getType("submit")
                    .click()
                cy.getClass("text-error").eq(0)
                    .should("contain", "The email must be a valid email address")
            })
        })
    })
    // context.only("Valid email", function () {
    //     ValidEmail.forEach((value) => {
    //         it(`Input email: ${value}`, () => {
    //             cy.viewport(1440, 760);
    //             cy.visit("/signup")
    //             cy.getPlaceHolder("Email")
    //                 .type(`${value}`)
    //             cy.getPlaceHolder("Password")
    //                 .type("123123")
    //             cy.getClass("label-checkbox")
    //                 .click({ focus: true })
    //             cy.get('.button')
    //                 .click()
    //             .wait(10000)
    // cy.get('.p-user-toolbar__a')
    //     .click({ force: true })
    //         })
    //     })
    // })

    it("Testcase", function () {
        cy.visit("/signin")
        cy.viewport(1440, 760);
        cy.get(':nth-child(1) > div > .input-text').type("43333313314abc@mail.cc")
        cy.get(':nth-child(2) > div > .input-text').type("123123")
        cy.get('.button').click()
    })
    it.only(`Input email: `, () => {
        cy.visit("/signup")
        cy.viewport(1440, 760);
        cy.getPlaceHolder("Email")
            .type("Chillhodd@gmail.com")
        cy.getPlaceHolder("Password")
            .type("ilovech")
        // cy.get(':nth-child(1) > .c-checkbox1__label')
        //     .click({ force: true })
        cy.get('.label-checkbox')
            // cy.get(':nth-child(2) > .c-checkbox1__label')
            .click({ force: true })
        // cy.getType("submit")
        cy.contains("Create Account")
        // cy.get('.layout-form__btn')
            .click({ force: true })
        cy.get('.tit').contains("Great! You are now registered at Writers Per Hour")

    })
})