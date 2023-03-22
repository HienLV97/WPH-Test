import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
describe('Tests', () => {
    let links // Khởi tạo biến `links`
    let test1
    let test2
    it('Check all links', () => {
        cy.viewport(1440, 812)
        cy.visit('/')
        Cypress.on('uncaught:exception', (error) => {
            // do something with the error, such as logging it or displaying a message to the user
            console.log(error)
            return false
        })
        cy.get('a').each(($link) => {
            console.log($link)
            links = $link.prop('href')
            // console.log(links)
            // if (newURL != "javascript:void(0)") {

            //     var URLbase = "https://kamora:iamafriend@"
            //     // var a = "https://writersperhour.dev/singup"
            //     var test1 = newURL.replace("https://", "")
            //     console.log(test1)
            //     test1 = URLbase + test1
            //     console.log(test1)
            //     cy.visit(test1)
            //     cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")
            // }
        })
    })
    it('Displays fetched links', () => {
        console.log(links) // Sử dụng lại biến `links`

        if (links != "javascript:void(0)") {
            var URLbase = "https://kamora:iamafriend@"
            // var a = "https://writersperhour.dev/singup"
            test1 = links.replace("https://", "")
            // console.log(test1)
            test2 = URLbase + test1
            // console.log(test1)
            // cy.visit(test1)
            // cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")
        }
    })

    // it(`Check url ${test2}`, () => {
    //     cy.visit(Cypress.env('test1'))
    //     console.log(link)
    //     cy.wrap(link).as('url')
    //     checkLink(link)
    //     cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")
    // })

})














// it("takes URL", () => {
//     cy.visit("/")
//     cy.get('a').each(($link) => {
//       const newURL = $link.prop('href')
//     //   console.log(newURL)
//       cy.wrap(newURL).as('newURL1')
//     }).then(() => {
//       const newURL = Cypress.env('newURL1')
//     //   console.log(newURL)
//     })
//   })
//   it("takes URL", () => {``
//     console.log('@newURL')
//   })

// it("Test all links", () => {
//     newURL.forEach((link) => {
//          it(`URL should contain ${link}`, () => {
//              console.log(link)
//              cy.wrap(link).as('url')
//             //  checkLink(link)
//          })
//      })
//  })


