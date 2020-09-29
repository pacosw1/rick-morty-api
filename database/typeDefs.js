const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    characters(page: Int): Characters!
    character(id: ID!): Character
    episodes(page: Int): Episodes!
    episode(id: ID!): Episode
    locations(page: Int): Locations!
    location(id: ID!): Location
  }

  #Paginated Info for search queries
  type Info {
    next: Int
    pages: Int
    count: Int
    prev: Int
  }

  #Paginated Search Queries
  type Locations {
    info: Info
    results: [Location]
  }

  type Episodes {
    info: Info
    results: [Episode]
  }

  type Characters {
    info: Info
    results: [Character]
  }

  #actual Models
  type Location {
    _id: ID
    name: String
    type: String
    dimension: String
    residents: [Character]
    created: String
  }

  type Episode {
    _id: ID
    name: String
    air_date: String
    episode: String
    characters: [Character]
    created: String
  }

  type Character {
    _id: String
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Location
    location: Location
    image: String
    episode: [Episode]
    created: String
  }
`;

exports.typeDefs = typeDefs;
