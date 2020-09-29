var mongoose = require("mongoose");

const { Character, Location, Episode } = require("./index");
const { create } = require("./models/episode");

const resolvers = {
  Query: {
    // characters: (page) => {},
    character: async (_, { id }) => {
      return getCharacter(id);
    },
    // // episodes: (page) => {},
    // episode: async (_, { id }) => getEpisode(id),
    // // locations: (page) => {},
    location: async (_, { id }) => {
      return getLocation(id);
    },
  },
};

//returns a single episode if found
const getLocation = async (id) => {
  try {
    //look for character with given id

    console.log(id);
    let total = await Location.findById(id).populate("residents");

    console.log(total);

    // if (location === null) {
    //   console.log("item not found");
    //   return null;
    // }

    // //join documents
    // // location.populate("residents");

    // //return character
    // return location;
  } catch (err) {
    console.log(err);
    //return null as err occured
    return null;
  }
};

//returns a single episode if found
const getEpisode = async (id) => {
  try {
    //look for character with given id
    let episode = await Episode.findById("5d299b853d1d85c017cc3e28").populate(
      "characters"
    );
    console.log(episode);

    if (episode === null) {
      console.log("item not found");
      return null;
    }

    //join documents

    //return character
    return episode;
  } catch (err) {
    console.log(err);
    //return null as err occured
    return null;
  }
};
//get character resolver
const getCharacter = async (id) => {
  try {
    //look for character with given id
    let character = await Character.findById(id)
      .populate("location")
      .populate("episode")
      .populate("origin");

    console.log(character);

    //return character
    return character;
  } catch (err) {
    console.log(err);
    //return null as err occured
    return null;
  }
};

exports.resolvers = resolvers;
