const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')

const app = express()
const PORT = 5000

const uri = "mongodb+srv://root:12345@cluster0.dhmjj.mongodb.net/graphql-test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
}))

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(`Connection error: ${err}`))
dbConnection.once('open', err => console.log('Connected to DB!!!!!!!'))

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started on port '+ PORT)
})