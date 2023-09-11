/// <reference types= "cypress" />

describe('test almosafer website', () => {
    it('this is about almosafer test', () => {
        cy.visit("https://www.almosafer.com/ar?ncr=1")

        cy.get('[data-testid="Header__CurrencySelector"]').should('include.text', 'SAR')

        cy.get('[data-testid="Header__LanguageSwitch"]').should('include.text', 'English')

        cy.get('#uncontrolled-tab-example-tab-flights').should('have.class', 'active');

    });
});