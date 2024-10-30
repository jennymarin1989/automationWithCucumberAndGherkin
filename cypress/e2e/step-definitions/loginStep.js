import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/loginPage';

const loginPage = new LoginPage();
const incorrectCredentialsText =
  'Epic sadface: Username and password do not match any user in this service';

Given('I can access the login page', () => {
  loginPage.visitLink('https://www.saucedemo.com/');
  loginPage.checkUrlContent('include', 'https://www.saucedemo.com/');
  loginPage.checkLogInFields();
});

Given('I can see an error message when logging in with empty credentials', () => {
  loginPage.setInputValue('username', ' {enter}');
  loginPage.setInputValue('password', ' {enter}');
  loginPage.checkInputValue('username', ' ');
  loginPage.checkInputValue('password', ' ');
  loginPage.clickOnButton('login-button');
  loginPage.getAMessage('error', incorrectCredentialsText);
});

Given('I can see an error message when logging in with incorrect credentials', () => {
  loginPage.setInputValue('username', 'standard_user');
  loginPage.setInputValue('password', ' {enter}');
  loginPage.checkInputValue('username', 'standard_user');
  loginPage.checkInputValue('password', ' ');
  loginPage.clickOnButton('login-button');
  loginPage.getAMessage('error', incorrectCredentialsText);
});

//Este step es útil para meter en el background de tests que no sean de login (Como los de main page, cart...)
Given('I log in with valid credentials', () => {
  loginPage.setInputValue('username', 'standard_user');
  loginPage.setInputValue('password', 'secret_sauce');
  loginPage.checkInputValue('username', 'standard_user');
  loginPage.checkInputValue('password', 'secret_sauce');
  loginPage.clickOnButton('login-button');
  loginPage.checkUrlContent('include', 'inventory');
});


