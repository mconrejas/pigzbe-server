const { API_BASE_URL, API_ENV } = require("../config");

const StellarSdk = require('stellar-sdk')

if (API_ENV)
    StellarSdk.Network.usePublicNetwork();

const server = new StellarSdk.Server(API_BASE_URL);

async function account({ id }) {

    const account = await server.accounts()
        .accountId(id)
        .call()
        .then(function (accountResult) {
            return accountResult;
        })
        .catch(function (err) {
            return err;
        });

    return account;
}

exports.account = account;