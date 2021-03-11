const resource = 'localhost:8089/api/v1';

function getScheduledTravelId( queryParam ) {
    return cy.task('token.getToken', null, { log: false }).then((token) => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${resource}/viagens/${queryParam.join('&')}`,
            headers: {
                accept: '*/*',
                Authorization: token,
                'Content-Type': 'application/json'
            }
        }).as('response');
    });
}


function getScheduledTravelAll() {
    return cy.task('token.getToken', null, { log: false }).then((token) => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${resource}/viagens/`,
            headers: {
                accept: '*/*',
                Authorization: token,
                'Content-Type': 'application/json'
            }
        }).as('response');
    });
}

function getScheduledTravelZone( queryParam ) {
    return cy.task('token.getToken', null, { log: false }).then((token) => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${resource}/viagens?regiao=${queryParam.join('&')}`,
            headers: {
                accept: '*/*',
                Authorization: token,
                'Content-Type': 'application/json'
            }
        }).as('response');
    });
}


module.exports = { getScheduledTravelId, getScheduledTravelAll, getScheduledTravelZone };
