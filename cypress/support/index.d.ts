// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-test attribute.
     * @example cy.getBySel('header')
     */
    getBySel(value: string): Chainable<Element>

    /**
     * Custom command to select DOM element by data-test attribute.
     * @example cy.getBySelLike('header')
     */
    getBySelLike(value: string): Chainable<Element>
  }
}
