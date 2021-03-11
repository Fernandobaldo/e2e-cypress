/* eslint-disable no-param-reassign */
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');
const dns = require('dns');


module.exports = async (on, config) => {


    on('file:preprocessor', cucumber());

    on('task', {
        token: {
            getToken: () => this.token || null,
            setToken: (token) => {
                this.token = token;
                return null;
            },
            clearToken: () => {
                this.token = undefined;
                return null;
            }
        },

    });

    return config;
};
