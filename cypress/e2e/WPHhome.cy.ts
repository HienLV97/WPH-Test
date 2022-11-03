import { contains } from "cypress/types/jquery"

describe("home page", () => {
  beforeEach (() => {
    cy.visit("https://writersperhour.com/prices-and-discounts")
    cy.get('.cb-enable').click()
  })
  it("the h1 contains the correct text", () => {
    cy.viewport(1440, 786)
    // cy.btn2("p-header-btn__order").click()
    //cy.get("[data-test='hero-heading']").contains("Testing Next.js ")
    //cy.get("title").contains("Place an Order - Writers Per Hour")
    //cy.get("button")
    cy.typemail("subscribe__input").type("acb@gmail.com")
    cy.get('#subscribe__form_btn').click()
  //   // cy.get("id").contains("subscribe__form_btn").click()
    cy.get('.p-banner-success')
    cy.get('.p-banner-success__txt').contains("Thanks for the subscription!")
    cy.get('.p-banner-success__cap').contains("You’ve just made a terrific decision. Please make sure to check your inbox for the discount code.")
  // })
  // it.only("Test"),() => {
  //   cy.visit("https://writersperhour.com/prices-and-discounts")
  //   cy.get('.cb-enable').click()
  //   cy.btn2("p-header-btn__order").click()
  })
})

