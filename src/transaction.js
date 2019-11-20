const { API_KEY, API_SECRET, API_BASE_URL } = require("../config");

const StellarSdk = require('stellar-sdk')

StellarSdk.Network.useTestNetwork();

const server = new StellarSdk.Server(API_BASE_URL);

async function transaction({ destination, amount }) {

    const account = await server.loadAccount(API_KEY);

    const fee = await server.fetchBaseFee();

    const transaction = new StellarSdk.TransactionBuilder(account, { fee })
        .addOperation(
            // this operation funds the new account with XLM
            StellarSdk.Operation.payment({
                destination: destination,
                asset: new StellarSdk.Asset('WLO', `${API_KEY}`),
                amount: `${amount}`
            })
        )
        .setTimeout(30)
        .build();

    // sign the transaction
    transaction.sign(StellarSdk.Keypair.fromSecret(API_SECRET));

    try {
        return await server.submitTransaction(transaction);
    } catch (err) {
        console.error(err);
        return err;
    }
}

exports.transaction = transaction;