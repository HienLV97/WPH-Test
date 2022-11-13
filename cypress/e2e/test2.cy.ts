import cypress from "cypress"

describe("Header", () => {
    it("test", function () {
        Cypress.config('pageLoadTimeout', 3000)
        cy.viewport(1440, 786)
        cy.visit("https://vitinhnaman.com/lo-diem-benchmark-cua-i7-8700k-manh-the-nay-thi-ai-mua-i7-7700k-nua")
       
        // cy.get('.ml-2')
        //     .should("be.visible")
        //     .should(([img]) => {
        //         expect(img.naturalWidth).to.equal(21);
        //         expect(img.naturalHeight).to.equal(20);
        //     })
        it("test2",function(){
            cy.get('#img_945bca50-7f0f-11e7-8ef7-b5266c6d843a').should('be.visible')

        })
    })
    
})
