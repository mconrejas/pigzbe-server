// server.js

const express = require('express')
const app = express()
const port = 3082

app.post('/api/transact', function (req, res) {    
    let destination = req.query.destination_id;

    let amount = req.query.amount;

    // Lazily import the assets-listing function.
    const { transaction } = require("./src/transaction");

    // Log the result to the console.
    return transaction({ destination, amount }).then(data => {
        res.json(data)
    });
})

app.get('/api/account', function (req, res) {
    let id = req.query.id;

    // Lazily import the assets-listing function.
    const { account } = require("./src/account");

    // Log the result to the console.
    return account({ id }).then(data => {
        res.json(data)
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))