const express = require("express");
let mongoose = require("mongoose");
require("dotenv").config();
// mongoose.set("bufferCommands", false);

const fs = require("fs");

//grapqhl schema and resolvers
const { typeDefs } = require("./database/typeDefs.js");

const { resolvers } = require("./database/resolvers.js");

const url = "mongodb://localhost:27017/rickandmorty-pacosw1";

const { ApolloServer } = require("apollo-server-express");
const { importData } = require("./database/seeding/scripts/importer.js");

//init graphql server
const server = new ApolloServer({ typeDefs, resolvers });

//start express app
const app = express();
server.applyMiddleware({ app });

// let rawdata = fs.readFileSync("./database/seeding/seeds/locations.json");

// const Character = require("./database/models/location.js");
// importData(rawdata, Character);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
