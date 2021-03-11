const url = 'localhost:8089/api/v1/auth'

function generateTokenAdmin() {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: url,
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
        },
        body: {
            "email": 'admin@email.com',
            senha: 654321
        }
    }).as('response').then((response) => {
        const token = response.body.data.token;
        cy.task('token.setToken', token, { log: false });
    });
}

function generateTokenUser() {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: url,
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
        },
        body: {
            "email": 'usuario@email.com',
            senha: 123456
        }
    }).as('response').then((response) => {
        const token = response.body.data.token;
        cy.task('token.setToken', token, { log: false });
    });
}




module.exports = { generateTokenAdmin, generateTokenUser };

