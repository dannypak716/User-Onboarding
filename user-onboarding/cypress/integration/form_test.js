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
        cy.contains('Submit').should('exist');
    })



})