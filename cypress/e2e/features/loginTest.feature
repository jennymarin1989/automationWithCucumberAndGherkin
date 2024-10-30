#Para comentar en un archivo .feature se hace con este símbolo #

#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite
    
    Background: visit the page
    #Esto es equivalente al beforeEach
    Given I visit "https://www.saucedemo.com/"

    #Añado este paso al background para sacarlo de todos los tests
    Then I check that url "include" the endpoint "https://www.saucedemo.com/"


# Como el paso "I visit "https://www.saucedemo.com/" está en el Background no es necesario añadirlo al principio de cada test

#Procura usar las partículas de Gherkin con un sentido, empieza primero siempre con "Given" usa el "When" en la principal accion y el "Then" en la principal aserción
    
    #Los Scenarios con errores de login 
    Scenario: login unsuccessful with empty credentials and remove error message
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username is required"
        And I click on the "error-button" button
        And I can see the "error" message dissapear
       
       # En este escenario has escrito en el username quieres dejar el password vacío, no le veo la utilidad a hacer presionar la tecla de "Enter", elimino ese paso
   Scenario: login unsuccessful with correct user and empty password
        Given I type in the input "username" the value "standard_user"
        And I check that value in input "username" should be "standard_user"
        And I check that value in input "password" should be ""
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Password is required"
        # los mensajes si son muy largos se documentarian en un doc aparte, si son cortos se pueden dejar aqui

    Scenario: login unsuccessful with incorrect user and password
        Given I type in the input "username" the value "123_user"
        And I type in the input "password" the value "12345"
        And I check that value in input "username" should be "123_user"
        And I check that value in input "password" should be "12345"
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username and password do not match any user in this service"

    Scenario: login unsuccessful with locked user and correct password
        Given I type in the input "username" the value "locked_out_user"
        And I type in the input "password" the value "secret_sauce"
        And I check that value in input "username" should be "locked_out_user"
        And I check that value in input "password" should be "secret_sauce"
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Sorry, this user has been locked out."

   #Los Scenarios con steps simplificados
   #los pasos de flujo completos simplificados como estos que has hecho tienen utilidad cuando van a ser reutilizados como por ejemplo un login válido
   # en estos casos no los veo útiles, más haya de para practicar, creo uno con login vñalido
    Scenario: login unsuccessful with empty credentials
        Given I can access the login page
        When I can see an error message when logging in with empty credentials
        When I can see an error message when logging in with incorrect credentials

#Pongo este escenario aquí para que veas como funciona, aunque no tiene sentido en la batería de pruebas del login
    Scenario: login unsuccessful with valid credentials
        Given I log in with valid credentials

    
   Scenario Outline: Scenario Outline name
        Given I visit "https://www.saucedemo.com/"
        Given I check that url "include" the endpoint "https://www.saucedemo.com/"
        When I type in the input "username" the value "<usernameValue>"
        When I type in the input "password" the value "<passwordValue>"
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "<errorMessage>"

        Examples:
        |usernameValue |passwordValue|errorMessage|
        |standard_user |123         |Epic sadface: Username and password do not match any user in this service|
        |123           |             |Epic sadface: Password is required|
        |locked_out_user|secret_sauce          |Epic sadface: Sorry, this user has been locked out.|


