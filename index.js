const express = require('express');

const { ApolloServer } = require('apollo-server-express');

// This query and mutation are grpahql specific keyword, here about is a query name with data type String, ! means mandatory
// We can add numbes of query we want and set the number of mutation we want.
// The query what is coming should be resolved, for that we want a resolver.

const typeDefs = `
  type Query {
    about: String!  
  }
  type Mutation {
    setAboutMessage(message: String!): String
  }
`;

let aboutMessage = 'Hello from GrapQL method';

// Resolver
const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  },
};

// we write the definioin for the resultver
function setAboutMessage(_, { message }) {
  return (aboutMessage = message);
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Integrtae the server with application , invoke the application

const app = express();

const port = '3000';
app.use(express.static('./public'));

server.start().then(function () {
  // anything that we want to access via graphql will be access to localhost/graphql
  server.applyMiddleware({ app, path: '/graphql', cors: true });
  // since 2 differenct serer are running, by deafult 2 server cvannot communicate, by default making cors:true we allow it.
});

app.get('/', function (req, res) {
  //res.send("Hello And Welcome")
  res.render('index.html');
});

app.listen(port, function () {
  console.log('WebServer is running');
});
