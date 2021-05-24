const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')

const app = express()
const PORT = 5000

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
}))

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started on port '+ PORT)
})