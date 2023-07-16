import "cypress-real-events";
// import { getClipboardData } from "../e2e/constants1.js";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
// Cypress.config('baseUrl', 'https://writersperhour.com/')

// Cypress.config('baseUrl', 'https://www.paperwritings.com/')

describe("Kiểm tra chức năng copy và paste của textbox", () => {
    it('Copy và paste dữ liệu thành công', () => {
        const textToPaste = 'this is not a valid email'
        cy.visit('/signup'); // Thay thế '/your-page' bằng URL của trang web của bạn

        // Chọn phần tử textbox
        cy.get(':nth-child(1) > div > .input-text').invoke('val', textToPaste).trigger('blur')
        cy.get('.button').trigger('focus');
    });
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
});