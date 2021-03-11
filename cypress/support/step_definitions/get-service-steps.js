import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

const { generateTokenUser } = require('../page_objects/auth-service-page');
const AuthBean = require('../dto/AuthBean');
const { getScheduledTravelId, getScheduledTravelAll, getScheduledTravelZone } = require('../page_objects/get-service-page');

Then('I get the stored travel by id', async function (table) {
    const {id, role} = table.rowsHash();
    cy.get('@response', {log: false}).then((response) => {
        const ids = response.body.data.id
        const queryParam = [];
        if (id) {
            if (id === 'true')
                queryParam.push(`${ids}`);
        }
        if (role === 'user') {
            const user = new AuthBean()
            generateTokenUser.call(this, user);
        }
        getScheduledTravelId.call(this, queryParam);
    })
});

Then('I get all stored travel', async function (table) {
    const {statusCode} = table.rowsHash();
    cy.get('@response', {log: false}).then((response) => {
        const statusCodeBoolean = JSON.parse(statusCode.toLowerCase());
        expect(response.status, 'STATUS').to.be.eq(statusCodeBoolean);
        })
        getScheduledTravelAll.call();
    });




Then('I define the zone', async function (table) {
    const { zone } = table.rowsHash();
    cy.get('@response', {log: false}).then((response) => {
        const queryParam = [];
        if (zone) {
            if (zone === zone )
                queryParam.push(`${zone}`);
        }
        getScheduledTravelZone.call(this, queryParam);
    })
});
