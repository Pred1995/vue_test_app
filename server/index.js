const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const schema = require('./schema');
const fs = require('fs');

let data = fs.readFileSync('settings.json');
let settings = JSON.parse(data).settings;

const app = express()
app.use(cors());

const root = {
    getAllSettings: () => {
        return settings
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5001, () => {
    console.log('server start on 5001 port')
})
