const express = require("express");
var mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

//grapqhl schema and resolvers
const { typeDefs } = require("./database/graphql/typeDefs.js");
const { resolvers } = require("./database/graphql/resolvers.js");

//init graphql server
const server = new ApolloServer({ typeDefs, resolvers });

//start express app
const app = express();
server.applyMiddleware({ app });

mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("connected to MongoDB");
  }
);

app.listen({ port: process.env.PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
