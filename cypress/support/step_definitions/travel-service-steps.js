import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

const {generateTokenAdmin, generateTokenUser} = require('../page_objects/auth-service-page');
const AuthBean = require('../dto/AuthBean');
const {generateTravel, getScheduledTravelId} = require('../page_objects/travel-controller-page');
const TravelBean = require('../dto/TravelBean');


When('I define travel information', function (table) {
    const data = table.rowsHash();
    const {
        acompanhante, dataPartida, dataRetorno, localDeDestino, regiao
    } = data;

    const newTravel = new TravelBean()
        .setAcompanhante(acompanhante)
        .setDataPartida(dataPartida)
        .setDataRetorno(dataRetorno)
        .setLocalDeDestino(localDeDestino)
        .setRegiao(regiao)
    generateTravel.call(this, newTravel);
});

Then('A response with {word} will return', function (responseType, table) {
    const {statusCode, id} = table.rowsHash();
    cy.get('@response', {log: false}).then((response) => {
        const statusCodeBoolean = JSON.parse(statusCode.toLowerCase());
        expect(response.status, 'STATUS').to.be.eq(statusCodeBoolean);
        if (responseType === 'success' && statusCode === '201') {
            if (id === 'true') {
                const ids = response.body.data.id
                expect(ids, 'ID').to.be.eq(ids);
            } else if (responseType === unsucess && statusCode === '403') {
            }
        }
    })
});

Then('Response should contain a travel with', function (table) {
    const {
        acompanhante, dataPartida, dataRetorno, localDeDestino, regiao
    } = table.rowsHash();
    cy.get('@response', {log: false}).then((response) => {
        const body = response.body.data;
        expect(body.acompanhante, 'acompanhante').to.be.eq(acompanhante);
        expect(body.dataPartida, 'dataPartida').to.be.eq(dataPartida);
        expect(body.dataRetorno, 'dataRetorno').to.be.eq(dataRetorno);
        expect(body.localDeDestino, 'localDeDestino').to.be.eq(localDeDestino);
        expect(body.regiao, 'regiao').to.be.eq(regiao);
    })
});


And('It will returned a message', async function (table) {
    const {message} = table.rowsHash();
    cy.get('@response', {log: false}).then((response) => {
        const msg = response.body.message
        if (msg) {
            if (message === 'true')
                expect(msg, 'regiao').to.be.eq(msg);
        }
    })
});
