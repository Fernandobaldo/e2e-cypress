import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

const {generateTokenAdmin, generateTokenUser} = require('../page_objects/auth-service-page');
const AuthBean = require('../dto/AuthBean');


When('I define the user role', function (table) {
    const data = table.rowsHash();
    const {role} = data;

    if (role === 'adm') {
        const adm = new AuthBean()
        generateTokenAdmin.call(this, adm);
    } else if (role === 'user') {
        const user = new AuthBean()
        generateTokenUser.call(this, user);
    }
});

And('Should be returned the token', function (table) {
    const {token} = table.rowsHash();
    cy.log('TOKEN', token);
    cy.get('@response', {log: false}).then((response) => {
        if (token) {
            if (token === 'true') {
                const found = response.body;
                const {token: tokenn} = response.body.data
                expect(found.data.token, 'token').to.be.eq(tokenn);
            }
        }
    })
});


And('A response with success from auth-service will return', function (table) {
    const { statusCode } = table.rowsHash();
    cy.log('statusCode', status);
    cy.get('@response', {log: false}).then((response) => {
        expect(response.status, 'statusCode').to.eq(parseInt(statusCode, 10));
    })
});
