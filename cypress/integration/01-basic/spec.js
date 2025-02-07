/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  // application should be running at what port?
  cy.visit('/')

  // this assertion fails on purpose
  // can you fix it?
  cy.contains('h1', 'todos')

  // also good practice is to use data attributes specifically for testing
  // see https://on.cypress.io/best-practices#Selecting-Elements
  // which play well with "Selector Playground" tool
  // how would you do select this element?
})
