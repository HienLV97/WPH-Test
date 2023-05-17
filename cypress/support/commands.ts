import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();

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
  Cypress.Commands.add("getTitle", (selector) => {
    return cy.get(`[title=${selector}]`)
  })
  Cypress.Commands.add('hover', (...args) => {})
  Cypress.Commands.overwrite('hover', (originalFn, ...otherArgs) => {})
//   Cypress.Commands.add("btn2", (selector) => {
//     return cy.get(`[class=${selector}]`)
//   })