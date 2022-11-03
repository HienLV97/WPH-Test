/// <reference types="cypress" />
Cypress.Commands.add("typemail", (selector) => {
    return cy.get(`[class=${selector}]`)
  })
  Cypress.Commands.add("btn1", (selector) => {
    return cy.get(`[type=${selector}]`)
  })
//   Cypress.Commands.add("btn2", (selector) => {
//     return cy.get(`[class=${selector}]`)
//   })