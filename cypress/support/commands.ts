/// <reference types="cypress" />

Cypress.Commands.add("getClass", (selector) => {
    return cy.get(`[class=${selector}]`)
  })
  Cypress.Commands.add("getType", (selector) => {
    return cy.get(`[type=${selector}]`)
  })
  Cypress.Commands.add("getValue", (selector) => {
    return cy.get(`[value=${selector}]`)
  })

  Cypress.Commands.add("getDataType", (selector) => {
    return cy.get(`[data-type=${selector}]`)
  })
  Cypress.Commands.add("getName", (selector) => {
    return cy.get(`[name=${selector}]`)
  })
//   Cypress.Commands.add("btn2", (selector) => {
//     return cy.get(`[class=${selector}]`)
//   })