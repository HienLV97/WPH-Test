import { contains } from "cypress/types/jquery"
import { headers } from "linkinator"
import { throttle, wrap } from "lodash"
 
describe("test Author", () => {
  beforeEach("Go to the homepage", () => {
    cy.viewport(1440, 812)
    cy.visit('https://writersperhour.dev', {
      auth: {
        username: 'kamora',
        password: 'iamafriend'
      }
    })
  })
  context("hero section", () => {
    it("allow users to subscribe to the email list", () => {
      cy.viewport(1440, 812)
      cy.get('.cb-enable').click()
      cy.get(':nth-child(1) > .c-media__txt').contains("We deliver custom written papers that undergo quality checks to ensure they are high on quality, accurate, authentic and original while adhering to your deadlines. With strict policies against plagiarism in place, you are guaranteed to receive only 100% plagiarism free papers from us.")
      cy.get('.p-nav__list > :nth-child(1) > a').contains("Our Writers")   
    })
  })
  
    it("Check input", () => {
      cy.viewport(1440, 812)
      cy.get('.cb-enable').click()
      cy.get(':nth-child(1) > .c-media__txt').contains("We deliver custom written papers that undergo quality checks to ensure they are high on quality, accurate, authentic and original while adhering to your deadlines. With strict policies against plagiarism in place, you are guaranteed to receive only 100% plagiarism free papers from us.")
      cy.get('.p-nav__list > :nth-child(1) > a').contains("Our Writers")   
  })
  context("Login", () =>{
    it("test login",()=>{
      cy.visit(url+'/signin')

    })
  })
  
})