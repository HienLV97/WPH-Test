
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')
var newURL =
    [
        '/how-it-works',
        '/prices-and-discounts',
        '/samples',
        '/signin',
        '/order',
        '/orders/active',
        '/orders/unpaid',
        '/orders/completed',
        '/orders/canceled',
        '/signup',
        '/essay-writers',
        '/essay-writers',
        '/ib-writers',
        '/mba-essay-writers',
        '/phd-papers',
        '/how-it-works',
        '/testimonials',
        '/samples',
        '/prices-and-discounts',
        '/fast-essay-writer',
        '/order',
        '/help',
        '/contacts',
        '/prices-and-discounts',
        '/policy/refund',
        '/privacy-policy',
        '/pay-to-do-term-paper',
        '/write-my-annotated-bibliography',
        '/paper-editing-service',
        '/analysis-papers',
        '/biology-papers',
        '/buy-personal-statement',
        '/write-my-speech',
        '/buy-research-proposal',
        '/write-my-book-report',
        '/argumentative-essay-writer',
        '/business-plan-writers',
        '/buy-college-papers',
        '/creative-writers',
        '/dissertation-writer',
        '/do-my-powerpoint',
        '/do-my-research-paper',
        '/extended-essay-writer',
        '/fast-essay-writer',
        '/homework-writers',
        '/ib-internal-assessment',
        '/phd-papers',
        '/tok_essay',
        '/write-my-assignment',
        '/write-my-discussion-post-for-me',
        '/write-my-essay-please',
        '/write-my-lab-report',
        '/write-my-literature-review',
        '/write-my-paper',
        '/write-my-thesis',
        '/essay-writers',
        '/ib-writers',
        '/how-it-works',
        '/prices-and-discounts',
        '/samples',
        '/help',
        '/blog',
        '/contacts',
        '/testimonials',
        '/about',
        '/privacy-policy',
        '/policy/refund',
        '/cookie-policy',
        '/policy/revision',
        '/terms-and-conditions',
        '/policy/acceptable',
    ];
    var uniqueArr = newURL.filter((value, index, self) => {
        return self.includes(value, index + 1) === false;
      });
describe("Test all links", () => {
    //  const links = ['/about-us','/signin']
    uniqueArr.forEach((link) => {
        it(`Link: ${link}`, () => {
            cy.visit(`/${link}`).get('h1').should('not.contain', "Oops, the page you were looking for doesn't exist")
            Cypress.on('uncaught:exception', (error) => {
                console.log(error)
                return false
            })
        })
    })
})
