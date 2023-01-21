describe('constructor', () => {
  beforeEach(() => {
    cy.viewport(1550, 1050)
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' })
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' })

    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    )
    cy.setCookie('accessToken', 'test-accessToken')
    cy.intercept('GET', 'constructor', { fixture: 'ingredients' })
    cy.visit('http://localhost:3001/')
  })

  it('Should drag and drop ingredient', () => {
    cy.get('[data-testid=60d3b41abdacab0026a733c7]').trigger('dragstart')
    cy.get('[data-test=drop-container]').trigger('drop')

    cy.get('[data-testid="60d3b41abdacab0026a733ce"]').trigger('dragstart')
    cy.get('[data-test=drop-container]').trigger('drop')

    cy.get('[data-testid="60d3b41abdacab0026a733ca"]').trigger('dragstart')
    cy.get('[data-test=drop-container]').trigger('drop')

    cy.get('[data-testid="60d3b41abdacab0026a733ca"]').trigger('dragstart')
    cy.get('[data-test=drop-container]').trigger('drop')
  })

  it('Should open modal window with ingredient and close modal', () => {
    cy.get('[data-testid=60d3b41abdacab0026a733c7]').click('center')
    cy.location().should((l) =>
      expect(l.hash).to.eq('#/ingredients/60d3b41abdacab0026a733c7')
    )
    cy.get('[data-test=modal]').should('exist')
    cy.get('[data-test=close-btn]').click('center')
    cy.get('[data-test=modal]').should('not.exist')
  })

  it('Should show the information about selected ingredient', () => {
    cy.get('[data-testid=60d3b41abdacab0026a733c7]').click('center')
    cy.get('[data-test=ingredient-image]').should(
      'have.attr',
      'src',
      'https://code.s3.yandex.net/react/code/bun-01.png'
    )
    cy.get('[data-test=ingredient-name]').should(
      'have.text',
      'Флюоресцентная булка R2-D3'
    )
    cy.get('[data-test=ingredient-calories]').should('have.text', '643')
    cy.get('[data-test=ingredient-proteins]').should('have.text', '44')
    cy.get('[data-test=ingredient-fat]').should('have.text', '26')
    cy.get('[data-test=ingredient-carbohydrates]').should('have.text', '85')
  })
})
