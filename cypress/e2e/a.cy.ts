import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
describe("Header", () => {
    context("Test",function(){
        it('basic-tester', () => {
            cy.server()
            cy.route('GET', '/api/v1/session', 'fixture:session. json')
            cy.route('GET', '/api/v1/provider/', 'fixture:providers. json')
            cy.route('GET', '/api/v1/channel/*', 'fixture:channel-tester.json')
            //cy.visit("https://writersperhour.com/order")
            cy.visit("/order", {
                auth: {
                    username: 'kamora',
                    password: 'iamafriend'
                }
            })
            cy.viewport(1440, 786)
            cy.get('.cb-enable').click()
         //   cy.wait(1000)
            cy.task('Matching image snapshot') 
            cy.get('#header')
                .invoke('css', 'position', 'actual')
                .invoke('css', 'z-index', '9999')
                .matchImageSnapshot()
        })
    })
    
})