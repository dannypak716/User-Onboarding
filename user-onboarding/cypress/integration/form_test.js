describe("Users App", () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    
    // Helpers
    const firstInput = () => cy.get('input[name=first_name]');
    const lastInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsBox = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id=submit]');
    
    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('proper elements are showing', () => {
        firstInput().should('exist');
        lastInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsBox().should('exist');
        submitBtn().should('exist');
    })

    describe('Filling out first and last name inputs', () => {
        it('can type in the inputs', () => {
            firstInput()
                .should('have.value', '')
                .type('Danny')
                .should('have.value', 'Danny')
            
            lastInput()
                .should('have.value', '')
                .type('Pak')
                .should('have.value', 'Pak')

            emailInput()
                .should('have.value', '')
                .type('dannypak@gmail.com')
                .should('have.value', 'dannypak@gmail.com')

            passwordInput()
                .should('have.value', '')
                .type('abc123')
                .should('have.value', 'abc123')

            termsBox()
                .click()
        })
    })



})