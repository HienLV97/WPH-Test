import { util } from "chai";
import cypress from "cypress"
import { data } from "cypress/types/jquery";
import { Children } from "react"
//làm lại

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
    it.only("Testcase", function () {
        cy.get('.cb-enable').click()
        cy.get(':nth-child(1) > div > .input-text').type("43333313314abc@mail.cc")
        cy.get(':nth-child(2) > div > .input-text').type("123123")
        cy.get('.button').click()
    })
})