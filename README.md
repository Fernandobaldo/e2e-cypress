# E2E Tests - Cypress APIs E2E

This project uses [Cypress](https://www.cypress.io) for APIs e2e automate testing.

Some additional dependencies:
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

## Getting Started

### Pre-requisites:

- Node JS v12.7+
- Download the project [gerenciado-viagens](https://github.com/AntonioMontanha/gerenciador-viagens)
-- Follow all pre-request and run on local

### Install project dependencies
Access the project root and execute the command in the terminal
```
npm install
```
### Test execution

For the first time test execution, you can just execute:

    npm cypress open

This command will open a Cypress execution window, showing all Features, grouped by Services/Folder:

*On first time execution, it could take some time to open, until cypress installation/setup.

You can click on one of then to start a test execution.


### Cucumber BDD style test scenarios

This project uses a `cypress-cucumber-preprocessor`, witch means that testing scenarios is wrote in cucumber style BDD using Gherkin language.

If you are not familiar with Cucumber, we recommend reading this [docs](https://cucumber.io/docs/guides/overview).

The “features” files are located on `cypress > integration > features`, separated by services.

	- viagemcontroller           
	├── cypress
	│   ├── integration
	│   │   └── features
	|   │       ├── auth-service
	|   │       │   ├── auth-service-validation.feature
	|   │       ├── get-service
    |   │       │   ├── get-service-validation.feature
    |   │       │   └──...
    |   │       └──...
    |   └──...
	└──...

### Page Objects

Page objects is a common practice and widely used by automated testing projects.

The concept itself is came from front-end testing, but the pattern can be applied to backend testing.

It is located on `cypress > support > page_objects` directory, and we use “-page” suffix to files.

	- viagemcontroller             
	├── cypress
	│   ├── support
	│   │   └── page_objects
	|   │       │   ├── auth-service-page.js
	|   │       │   └── get-service-page.js
    |   │       │   └──...
    |   │       └──...
    |   └──...
	└──...

The idea of use page-objects is to abstract common functions of a micro-service to avoid duplicated code inside `step definitions`, also to improve code readability.

### DTO pattern

DTO pattern is not a common practice in automated tests projects or even on JavaScript, but it can be a good practice when we are structuring a project that can be increase soon.

The idea of DTO pattern is to have a `Bean objects` that uses JavaScript ES6 classes that have the `request body` contract of a microservice/resource, that can set default values or set fields content when instanced on `step definition`.

Example of usage:

`travel-service-steps.js`

    const TravelBean = require('../../dto/TravelBean');
    const { travelBean } = require('../../page_objects/orders/travel-service-page');
    
    When('I define travel information', async function (table) {
    (...)
    
    // this "travel information" below is the request body object that have methods to set values
    const newTravel = new TravelBean()
        .setAcompanhante(acompanhante)
        .setRegiao(regiao);
    
    // This is a page-object function to create an order, passing the order object as request body.
    generateTravel.call(this, newTravel);
    }


## Autor

* **Fernando Baldo** - *GitHub* - [Fernandobaldo](https://github.com/Fernandobaldo)

