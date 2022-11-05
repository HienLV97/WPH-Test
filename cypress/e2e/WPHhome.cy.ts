import { contains } from "cypress/types/jquery"
import { headers } from "linkinator"
describe("test Author", () => {
  context("hero section", () => {
    it("allow users to subscribe to the email list", () => {
      cy.visit("https://kamora:iamafriend@writersperhour.dev")
      cy.viewport(1440, 812)
      cy.get('.cb-enable').click()
      cy.get(':nth-child(1) > .c-media__txt').contains("We deliver custom written papers that undergo quality checks to ensure they are high on quality, accurate, authentic and original while adhering to your deadlines. With strict policies against plagiarism in place, you are guaranteed to receive only 100% plagiarism free papers from us.")
    })
  })
    
      // cy.viewport(1440, 812)
      // cy.get('.cb-enable').click()
 })



