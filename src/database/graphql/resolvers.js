const { ApolloError, UserInputError } = require("apollo-server");
const { ComputePagination } = require("../helpers");

const { Character, Location, Episode } = require("../index");

const resolvers = {
  Query: {
    characters: async (_, { page }) => getCharacters(page),
    character: async (_, { id }) => getCharacter(id),
    episodes: async (_, { page }) => getEpisodes(page),
    episode: async (_, { id }) => getEpisode(id),
    locations: async (_, { page }) => getLocations(page),
    location: async (_, { id }) => getLocation(id),
  },
};

//LOCATIONS
const getLocations = async (page) => {
  let limitPerPage = parseInt(process.env.LIMIT_PAGE);
  try {
    //total documents
    let count = await Location.countDocuments();

    //get pagination info
    let { prev, pages, next, startIndex } = ComputePagination(
      page,
      count,
      limitPerPage
    );

    //error handling
    if (page > pages || page < 1)
      return new UserInputError("Invalid page number");

    //get results starting at selected page and limited to 20 per page
    let results = await Location.find().skip(startIndex).limit(limitPerPage);

    //format result to match schema
    let info = {
      count,
      next,
      prev,
      pages,
    };

    return { info, results };
  } catch (err) {
    //return null as err occured
    return new ApolloError(err.message, "INTERNAL SERVER ERROR");
  }
};

//returns a single episode if found
const getLocation = async (id) => {
  try {
    //look for character with given id
    let location = await Location.findById(id).populate("residents");

    //if item not found
    if (location === null) {
      return null;
    }

    return location;
  } catch (err) {
    //return null as err occured
    return new ApolloError(err.message, "INTERNAL SERVER ERROR");
  }
};

//EPISODES
const getEpisodes = async (page) => {
  let limitPerPage = parseInt(process.env.LIMIT_PAGE);
  try {
    let count = await Episode.countDocuments();

    //error handling
    if (page > pages || page < 1)
      return new UserInputError("Invalid page number");

    //get pagination info
    let { prev, next, startIndex, pages } = ComputePagination(
      page,
      count,
      limitPerPage
    );

    //get results starting at selected page and limited to 20 per page
    let results = await Episode.find().skip(startIndex).limit(limitPerPage);

    let info = {
      count,
      next,
      prev,
      pages,
    };

    return { info, results };
  } catch (err) {
    return new ApolloError(err.message, "INTERNAL SERVER ERROR");
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
    //return null as err occured
    return new ApolloError(err.message, "INTERNAL SERVER ERROR");
  }
};

//CHARACTERRS
const getCharacter = async (id) => {
  try {
    //look for character with given id
    let character = await Character.findById(id)
      .populate("location")
      .populate("episode")
      .populate("origin");

    //return character
    return character;
  } catch (err) {
    //return null as err occured
    return new ApolloError(err.message, "INTERNAL SERVER ERROR");
  }
};

const getCharacters = async (page) => {
  let limitPerPage = parseInt(process.env.LIMIT_PAGE);
  try {
    let count = await Character.countDocuments();

    //get pagination info
    let { prev, next, pages, startIndex } = ComputePagination(
      page,
      count,
      limitPerPage
    );

    //error handling
    if (page > pages || page < 1)
      return new UserInputError("Invalid page number");

    //get results starting at selected page and limited to 20 per page
    let results = await Character.find().skip(startIndex).limit(limitPerPage);

    let info = {
      count,
      next,
      prev,
      pages,
    };

    return { info, results };
  } catch (err) {
    //return null as err occured
    return new ApolloError(err.message, "INTERNAL SERVER ERROR");
  }
};

exports.resolvers = resolvers;
