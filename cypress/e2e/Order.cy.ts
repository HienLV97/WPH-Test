import { contains } from "cypress/types/jquery"
import { globby } from "globby"
import { headers } from "linkinator"
describe("test Order function", () => {
    beforeEach(function () {
        cy.fixture('Header').then(function (Header) {
            this.Header = Header;
        })
        cy.fixture('Url').then(function (Url) {
            this.Url = Url;
        })
        cy.fixture('example').then(function (bba) {
            this.bba = bba;
            cy.visit("/", {
                auth: {
                    username: bba.id,
                    password: 'iamafriend'
                }
            })
            cy.viewport(1440, 786)
            // cy.get('.cb-enable').click()
            // Cypress.on('uncaught:exception', (err, runnable) => {
            //     // returning false here prevents Cypress from
            //     // failing the test
            //     return false
            // })
        })
    })
    it("test", () => {
        //cy.visit("http://localhost:3000")
        cy.get('.p-header-btn__order').click()
        cy.get(':nth-child(1) > .form-content > .jcc-element > [data-toggle="1"]').click()
        cy.get(':nth-child(2) > .form-content > .chosen').select('Analysis Paper')
        cy.get(':nth-child(3) > .form-content > .chosen').select('61')
        cy.get(':nth-child(4) > .form-content > .jcc-element > [data-toggle="7"]').click()
        cy.getClass("form-control").type("Quynh")
        cy.getName("instructions").type("dien")
        cy.get('#btnnext').click()
        // })
        // it("step 2", () => {
        cy.get('.form-elements.u-mb-32 > .form-content > .c-input-number > .qtyplus').click()
        cy.getDataType('checkbox').click()
        cy.get('[data-toggle="5"]').click()
        cy.get(':nth-child(2) > .form-content > .jcc-element > [data-toggle="1"]').click().contains("SINGLE")
        for (let n = 1; n < 5; n++) {
            cy.get(':nth-child(10) > .form-content > .c-input-number > .qtyplus').click({ multiple: true })
        }
        cy.get(':nth-child(11) > .form-content > .c-input-number > .qtyplus').click()
        cy.get('[data-prp-description="High-rank professional writer, proficient in the requested field of study"]').click()
        cy.get('[data-prp-description="Standard price"]').click()
        cy.getClass("btnnext").click()
        cy.get(':nth-child(2) > .text-uppercase').click()
        cy.get(':nth-child(3) > .form-content > .form-control').type("test1@gmail.com")
        cy.get('#returned-form > :nth-child(4) > .form-content > .form-control').type("111111")
        cy.get('.form-buttons > .form-content > .form-control').click()
        cy.get('.payment > :nth-child(1)').click()
        cy.get('.payment > :nth-child(2)').click()
        cy.get('.payment > :nth-child(1)').click()
        cy.get('.btn-green').click()
    })
})



