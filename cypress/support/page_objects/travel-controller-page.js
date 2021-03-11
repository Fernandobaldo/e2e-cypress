const resource = 'localhost:8089/api/v1';

function generateTravel(body) {
    return cy.task('token.getToken', null, {log: false}).then((token) => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url:  `${resource}/viagens`,
            headers: {
                accept: '*/*',
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: body
        }).as('response');
    });
}


module.exports = { generateTravel };
