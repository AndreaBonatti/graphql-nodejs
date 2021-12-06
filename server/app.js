const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connection to mlab database
mongoose.connect('mongodb+srv://admin:Test1234@gql-ninja.lcx93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('now listening for requests on port 4000');
});
