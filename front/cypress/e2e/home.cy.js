describe('Home Page', () => {
    beforeEach(() => {
        cy.intercept('POST', 'http://localhost:3000/auth/login').as('loginRequest')
        cy.intercept('POST', 'http://localhost:3000/auth/register').as('registerRequest')
    })

    it("login", () => {
        cy.visit('/login')
        cy.get('input#email').should('be.visible').as('emailInput')
        cy.get('@emailInput').type('naomauss@gmail.com', { force: true })
        cy.get('input#password').should('be.visible').as('passwordInput')
        cy.get('@passwordInput').type('test123', { force: true })
        cy.get('[data-cy="login-button"]').should('be.visible').click()

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.request.url).to.include('/auth/login')
            expect(interception.request.method).to.equal('POST')
            expect(interception.request.body).to.deep.equal({
                email: 'naomauss@gmail.com',
                password: 'test123'
            })
        })
    })

    it("register", () => {
        cy.visit('/login')
        cy.get('[data-cy="to-register"]').should('be.visible').click()
        cy.get('input#newName').should('be.visible').as('nameInput')
        cy.get('@nameInput').type('Test User', { force: true })
        cy.get('input#newEmail').should('be.visible').as('emailInput')
        cy.get('@emailInput').type('test@gmail.com', { force: true })
        cy.get('input#newPassword').should('be.visible').as('passwordInput')
        cy.get('@passwordInput').type('test123', { force: true })
        cy.get('input#confirmPassword').should('be.visible').as('confirmPasswordInput')
        cy.get('@confirmPasswordInput').type('test123', { force: true })
        cy.get('[data-cy="register-button"]').should('be.visible').click()

        cy.wait('@registerRequest').then((interception) => {
            expect(interception.request.url).to.include('/auth/register')
            expect(interception.request.method).to.equal('POST')
            expect(interception.request.body).to.deep.equal({
                name: 'Test User',
                email: 'test@gmail.com',
                password: 'test123'
            })
        })
    })
})