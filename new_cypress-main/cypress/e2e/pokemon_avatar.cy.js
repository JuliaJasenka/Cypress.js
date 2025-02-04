
describe('Покупка аватора', function () {

    it('Покупка нового аватара', function () {
        cy.visit('https://pokemonbattle.ru');
        cy.get('input[type="email"]').type('USER_LOGIN');
        cy.get('input[type="password"]').type('USER_PASSWORD');
        cy.get('.auth__button').click();

        cy.get('.header__container > .header__id').click({ force: true });
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4627100101654724');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TEST');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type(56456);
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
}) 