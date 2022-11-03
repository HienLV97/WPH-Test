describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.viewport(1440, 786)
    cy.visit("https://writersperhour.com/prices-and-discounts")
    //cy.get("[data-test='hero-heading']").contains("Testing Next.js ")
    //cy.get("title").contains("Place an Order - Writers Per Hour")
    //cy.get("button")
    cy.getByData("subscribe__input").type("acb")
  })
})
