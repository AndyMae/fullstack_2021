describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'testaaja',
      username: 'testi',
      password: 'testisalasana'
    }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3003')
  })

  it('login form is shown', function() {
    cy.contains('Login').click()
    cy.get('#login-form')
  })

  describe('login', function() {
    it('succeeds with correct credentials', function() {
      cy.contains('Login').click()
      cy.get('#username').type('testi')
      cy.get('#password').type('testisalasana')
      cy.contains('login').click()
      cy.contains('Log out').click()

    })

    it('fails with wrong passwords', function() {
      cy.contains('Login').click()
      cy.get('#username').type('testi')
      cy.get('#password').type('väärä')
      cy.contains('login').click()
      cy.get('.neg')
        .should('have.css', 'color', 'rgb(255, 0, 0)')
    })

    describe('when logged in', function() {
      beforeEach(function() {
        cy.login({ username: 'testi', password: 'testisalasana' })
      })

      it('blog can be created after logging in', function() {
        cy.contains('New blog').click()
        cy.get('#title').type('testiblogi')
        cy.get('#author').type('testauthor')
        cy.get('#url').type('www.testi.fi')
        cy.get('#create-button').click()
        cy.contains('testiblogi')
        cy.contains('Log out').click()
      })
    })

    describe('when logged in with a blog created', function() {
      beforeEach(function() {
        cy.login({ username: 'testi', password: 'testisalasana' })
        cy.createBlog({
          title: 'testiblogi',
          author: 'testauthor',
          url: 'www.testi.fi'
        })
      })

      it('blog can be liked', function() {
        cy.contains('view').click()
        cy.contains('like').click()
      })

      it('blog can be deleted by the user who has created it', function() {
        cy.contains('view').click()
        cy.contains('remove').click()
        cy.get('html')
          .should('not.contain', 'testiblogi')
      })
    })

    describe('blogs are in a right order based on the likes', function() {
      beforeEach(function() {
        cy.login({ username: 'testi', password: 'testisalasana' })
        cy.createBlog({
          title: 'testiblogi1',
          author: 'testauthor',
          url: 'www.testi.fi'
        })
        cy.createBlog({
          title: 'testiblogi2',
          author: 'testauthor',
          url: 'www.testi.fi'
        })
      })

      it('ordering is default before liking of blogs', function() {
        cy.get('ul')
          .get('li').eq(0)
          .contains('view')
          .click()

        cy.get('ul')
          .get('li').eq(0)
          .then(($li) => {
            cy.wrap($li).should('contain', 'testiblogi1')
          })

        cy.get('ul')
          .get('li').eq(1)
          .contains('view')
          .click()

        cy.get('ul')
          .get('li').eq(1)
          .then(($li) => {
            cy.wrap($li).should('contain', 'testiblogi2')
          })
      })

      it('testblog1 is ordered first after it is liked once and testiblogi2 has no likes', function() {
        cy.get('ul')
          .get('li').eq(0)
          .contains('view')
          .click()

        cy.get('ul')
          .get('li').eq(0)
          .contains('like')
          .click()

        cy.get('ul')
          .get('li').eq(0)
          .then(($li) => {
            cy.wrap($li).should('contain', '1', { timeout: 10000 })
            cy.wrap($li).should('contain', 'testiblogi1')
          })

        cy.get('ul')
          .get('li').eq(1)
          .contains('view')
          .click()

        cy.get('ul')
          .get('li').eq(1)
          .then(($li) => {
            cy.wrap($li).should('contain', 'testiblogi2')
          })
      })

      it.only('testiblogi2 should be first when it has 2 likes and testiblogi1 has 1 like', function() {
        cy.get('ul')
          .get('li').eq(0)
          .contains('view')
          .click()

        cy.get('ul')
          .get('li').eq(0)
          .contains('like')
          .click()

        cy.get('ul')
          .get('li').eq(1)
          .contains('view')
          .click()

        cy.get('ul')
          .get('li').eq(1)
          .contains('like').as('b2like')
          .click()

        cy.get('@b2like')
          .click()

        cy.get('ul')
          .get('li').eq(0)
          .then(($li) => {
            cy.wrap($li).should('contain', 'testiblogi2', { timeout: 10000} )
            cy.wrap($li).should('contain', '2', { timeout: 10000 })
          })

        cy.get('ul')
          .get('li').eq(1)
          .then(($li) => {
            cy.wrap($li).should('contain', 'testiblogi1', { timeout: 10000 })
            cy.wrap($li).should('contain', '1', { timeout: 10000 })
          })
      })
    })

  })
})