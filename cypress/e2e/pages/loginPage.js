/* eslint-disable cypress/unsafe-to-chain-command */
import { CommonPage } from './commonPage';

export class LoginPage extends CommonPage {

  checkLogInFields() {
    cy.get('[data-test="username"]').should('be.visible').and('have.value', '');
    cy.get('[data-test="password"]').should('be.visible').and('have.value', '');
    cy.get('[data-test="login-button"]').should('be.visible');
  }

}
