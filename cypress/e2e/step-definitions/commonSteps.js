import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Clases importadas
import { CommonPage } from '../pages/commonPage';

let commonPage = new CommonPage();

//Instancias de clase

//puede ser given, then, when, da igual el orden-- siempre lo importante es lo q hay dentrode la funcion importante
//si tengo otra string que quiero pasar tb como parametro {string} {string} el orden es importante a la hora de pasar los parametros de la funcion si paso en orden contrario fallar'a el test
Given('I visit {string}', (url) => {
  commonPage.visitLink(url);
});

Given('I check that url {string} the endpoint {string}', (checkUrl, url) => {
  commonPage.checkUrlContent(checkUrl, url);
});

//  ESte es un step genérico para meter un value en un input no debería de llevar lo de "invalid" se lo quito
When('I type in the input {string} the value {string}', (inputElement, inputValue) => {
  commonPage.setInputValue(inputElement, inputValue);
});

Then('I check that value in input {string} should be {string}', (inputElement, inputValue) => {
  commonPage.checkInputValue(inputElement, inputValue);
});

Given('I click on the {string} button', (buttonElement) => {
  commonPage.clickOnButton(buttonElement);
});

Then('I can see a {string} message with text: {string}', (typeOfMessage, textMessage) => {
  commonPage.getAMessage(typeOfMessage, textMessage);
});

Then('I can see the {string} message dissapear', (typeOfMessage) => {
  commonPage.isMessageDisplayed(typeOfMessage);
});

// importante q sea tipo integer en este casso ya q lo valida
// Given("the list have {int} elements", (elementNumber) => {
//     mainPage.listElementNumber(elementNumber);
// });

//nunca tener 2 steps que se llamen igual/ cypress no sabra cual utilizar y fallara
