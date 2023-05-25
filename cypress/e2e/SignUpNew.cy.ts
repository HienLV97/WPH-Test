import "cypress-real-events";
import { forEach } from "lodash";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')

describe("home page", () => {
    beforeEach(() => {
        cy.fixture('example.json').as('exampleData');
        cy.viewport(1440, 760);
        cy.visit("/signup")
    })
    context("Negative", function () {
        it("From '/signin'", function () {
            cy.visit("/signin")
            cy.contains("Sign Up").click()
                // cy.getClass("signin__link").click()
                .get("h1").contains("SIGN UP")
        })
        it("By URL", function () {
            cy.get("h1").contains("SIGN UP")
        })
    })
    context.only("Invalid email", function () {
        // it("Leaving the field empty", function () {
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email field is required")
        // })
        // it("The email prefix is all spacing", function () {
        //     cy.getPlaceHolder("Email").type("     @mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it("Spacing at the end of the prefix", function () {
        //     cy.getPlaceHolder("Email").type("abc   @mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it("Missing the email prefix", function () {
        //     cy.getPlaceHolder("Email").type("@mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it("The email domain is all spacing", function () {
        //     cy.getPlaceHolder("Email").type("abc@      ")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it("Missing the email domain", function () {
        //     cy.getPlaceHolder("Email").type("abc@")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it("Missing the @", function () {
        //     cy.getPlaceHolder("Email").type("abc.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it("Create account", function () {
        //     cy.getPlaceHolder("Email").type("t1@g.c")
        //     cy.get(':nth-child(2) > div > .input-text').type("123123")
        //     cy.getPlaceHolder("Password").type("123123")
        //     cy.getType("checkbox").click({ force: true })
        //     cy.getType("submit").click({ force: true })
        // })
        // it("The email is already used", function () {
        //     cy.getPlaceHolder("Email").type("t1@g.c")
        //     cy.get(':nth-child(2) > div > .input-text').type("123123")
        //     cy.getPlaceHolder("Password").type("123123")
        //     cy.getType("submit").click()
        //     cy.contains("There was a problem creating your account")
        // })
        // it("The email is already used", function () {
        //     cy.getPlaceHolder("Email").type("t1@g.c")
        //     cy.get(':nth-child(2) > div > .input-text').type("123123")
        //     cy.getPlaceHolder("Password").type("123123")
        //     cy.getType("submit").click()
        //     cy.contains("There was a problem creating your account")
        // })
        // it('Email format "abc-@mail.com"', function () {
        //     cy.getPlaceHolder("Email").type("abc-@mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it('Email format "abc..def@mail.com"', function () {
        //     cy.getPlaceHolder("Email").type("abc..def@mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it('Email format ".abc@mail.com"', function () {
        //     cy.getPlaceHolder("Email").type(".abc@mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it('Email format "abc#def@mail.com"', function () {
        //     cy.getPlaceHolder("Email").type("abc#def@mail.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it('Email format "abc.def@mail.c"', function () {
        //     cy.getPlaceHolder("Email").type("abc.def@mail.c")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it('Email format "abc.def@mail#archive.com"', function () {
        //     cy.getPlaceHolder("Email").type("abc.def@mail#archive.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        // it('Email format "abc.def@mail#archive.com"', function () {
        //     cy.getPlaceHolder("Email").type("abc.def@mail#archive.com")
        //     cy.getType("submit").click()
        //     cy.getClass("text-error").eq(0)
        //         .should("contain", "The email must be a valid email address")
        // })
        const Invalid = [
            ""
            ,"      @mail.com"
            ,"abc   @mail.com"
            ,"@mail.com"
            ,"abc@      "
            ,"abc@"
            ,"abc.com"
            ,"abc..def@mail.com"
            ,".abc@mail.com"
            ,"abc.def@mail#archive.com"
            ,"abc.def@mail"
            ,"abc.def@mail..com"

        ]

        Invalid.forEach((link) => {
            it(`Input email: ${link}`, () => {
                cy.visit('/signup')
                cy.getPlaceHolder("Email").type(`${link}`)
                cy.getType("submit").click()
                cy.getClass("text-error").eq(0)
                    .should("contain", "The email must be a valid email address")
            })
        })
    })
})