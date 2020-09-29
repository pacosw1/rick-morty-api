const express = require("express");
var db;

//grapqhl schema and resolvers
const { typeDefs } = require("./database/typeDefs.js");

const { resolvers } = require("./database/resolvers.js");

const url = "mongodb://localhost:27017/rickandmorty-pacosw1";

const { ConnectDB } = require("./database/index.js");

//connect to mongoDB docker instance
let connected = ConnectDB(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//stop server if connection refused
if (!connected) {
  process.exit(1);
}

const { ApolloServer } = require("apollo-server-express");

//init graphql server
const server = new ApolloServer({ typeDefs, resolvers });

//start express app
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
