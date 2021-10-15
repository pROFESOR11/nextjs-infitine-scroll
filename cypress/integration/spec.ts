/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable jest/expect-expect */
/// <reference path="../support/index.d.ts" />

describe('NextJS Infinite Scroll Test Kit', () => {
  beforeEach(() => {
    // mock fixture data for remote end
    cy.intercept('GET', `/api/items?*`, {
      fixture: 'items.json',
    })
    cy.visit('http://localhost:3000')
  })

  it('header displayed correctly', () => {
    cy.getBySel('header').should('be.visible').and('contain.text', 'NextJS Infinite Scroll')
  })

  it('footer displayed correctly', () => {
    cy.getBySel('footer').should('be.visible').and('contain.text', 'NextJS Infinite Scroll')
  })

  // item container should have 12 item-cards on initial load
  it('item container should have 12 items', () => {
    cy.getBySel('item-container').getBySelLike('item-card').should('have.length', 12)
  })

  // once clicked on the img at item-card, the modal should be visible
  // once clicked outside of modal, the modal should not exist anymore
  it('clicking image should load image modal', () => {
    cy.getBySel('item-card-1').find('img').click()

    cy.getBySel('item-modal-1').should('be.visible')

    cy.get('body').click(0, 0)

    cy.getBySel('item-modal-1').should('not.exist')
  })

  // test case for infinite scroll
  it('scroll to bottom should load new items', () => {
    cy.scrollTo('bottom')
    cy.getBySel('item-container').getBySelLike('item-card').should('have.length', 24)

    cy.scrollTo('bottom')
    cy.getBySel('item-container').getBySelLike('item-card').should('have.length', 36)
  })
})
