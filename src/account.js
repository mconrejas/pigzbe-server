const { API_KEY, API_SECRET, API_BASE_URL } = require("../config");

const StellarSdk = require('stellar-sdk')

StellarSdk.Network.useTestNetwork();

const server = new StellarSdk.Server(API_BASE_URL);

async function account({ id }) {

    return account = await server.accounts()
        .accountId(id)
        .call()
        .then(function (accountResult) {
            return accountResult;
        })
        .catch(function (err) {
            return err;
        });
}

exports.account = account;