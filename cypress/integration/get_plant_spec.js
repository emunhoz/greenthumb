describe('Home page', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000/')
  })

  it('go to wizard', function () {
    cy.get('a')
      .contains('start quizz')
      .click()
  })

  it('link to next page must be disabled', function () {
    cy.get('button')
      .contains('next')
      .should('be.disabled')
  })

  it('select a card option', function () {
    cy.get('[color="#FD9872"]')
      .contains('High sunlight')
      .click()

    cy.get('[color="#FD9872"]').should('class', 'active')
  })

  it('go to next step', function () {
    cy.get('button')
      .contains('next')
      .click()
  })

  it('link to next page must be disabled', function () {
    cy.get('button')
      .contains('next')
      .should('be.disabled')
  })

  it('select a card option', function () {
    cy.get('[color="var(--primary-light)"]')
      .contains('Rarely')
      .click()

    cy.get('[color="var(--primary-light)"]').should('class', 'active')
  })

  it('go to next step', function () {
    cy.get('button')
      .contains('next')
      .click()
  })

  it('link to finish page must be disabled', function () {
    cy.get('a')
      .contains('finish')
      .should('have.class', 'disabled')
  })

  it('select a card option', function () {
    cy.get('[color="#FD9872"]')
      .contains('Yes')
      .click()

    cy.get('[color="#FD9872"]').should('class', 'active')
  })

  it('go to next step', function () {
    cy.get('a')
      .contains('finish')
      .click()
  })

  it('get a plant', function () {
    cy.wait(1000)
    cy.get('a')
      .contains('buy now')
      .click()
  })

  it('fill the form', function () {
    cy.get('input[name="name"]')
      .type('John Doe')
      .should('have.value', 'John Doe')
    cy.get('input[name="email"]')
      .type('johndoe@email.com')
      .should('have.value', 'johndoe@email.com')
  })

  it('submit form with success message', function () {
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('h2').contains('Thank you!')
  })
})
