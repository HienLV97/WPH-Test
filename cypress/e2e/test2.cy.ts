import cypress from "cypress"
import { data,
 type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl',
 'https://kamora:iamafriend@writersperhour.dev/')
function getURL(getUrl) {
    cy.visit('/https://writersperhour.dev/privacy-policy')
    cy.get('a').each(($link) => {
        console.log($link)
        var newURL = $link.prop('href')
        // console.log(newURL)
        // cy.wrap(newURL).as('newURL1')
        // Cypress.env('textURL', newURL);
        // console.log('Hien1: '+newURL)
    })
}

// it("Test all links", () => {
//     cy.visit('/')
//     cy.get('a').each(($link) => {

//         // var newURL = []
//         var newURL = $link.prop('href')
//         if (newURL.startsWith("https://writersperhour.dev")) {
//             var newlink = []
//             newlink = newURL
//         } else { }

//         console.log(newlink)
//         // console.log(newURL)
//         // cy.wrap(newURL).as('newURL1')
//         // Cypress.env('textURL', newURL);
//         // console.log('Hien1: '+newURL)
//     })
// }) 
it("Test all links", () => {
    cy.viewport(1440,750)
    cy.visit('/privacy-policy')
    var newURL = []; // Khởi tạo một mảng rỗng
    cy.get('a').each(($link) => {
      var href = $link.prop('href');
      if (href.startsWith('https://writersperhour.dev')) { // Kiểm tra giá trị của href
        newURL.push(href); // Thêm giá trị href vào mảng newURL
      }
    }).then(() => {
      console.log(newURL); // In ra giá trị của mảng newURL sau khi vòng lặp kết thúc
    });

})