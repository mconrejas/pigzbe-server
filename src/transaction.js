const { WALLET_ADDRESS, WALLET_ID, WALLET_SECRET, API_BASE_URL, API_ENV } = require("../config");

const StellarSdk = require('stellar-sdk')

if (API_ENV)
    StellarSdk.Network.usePublicNetwork();

const server = new StellarSdk.Server(API_BASE_URL);

async function transaction({ destination, amount }) {
    const account = await server.loadAccount(WALLET_ADDRESS);

    const fee = await server.fetchBaseFee();

    const transaction = new StellarSdk.TransactionBuilder(account, { fee })
        .addOperation(
            // this operation funds the new account with XLM
            StellarSdk.Operation.payment({
                destination: destination,
                asset: new StellarSdk.Asset('WLO', WALLET_ID),
                amount: amount
            })
        )
        .setTimeout(30)
        .build();

    // sign the transaction
    transaction.sign(StellarSdk.Keypair.fromSecret(WALLET_SECRET));

    try {
        return await server.submitTransaction(transaction);
    } catch (err) {
        console.error(err);
        return err;
    }
}

exports.transaction = transaction;