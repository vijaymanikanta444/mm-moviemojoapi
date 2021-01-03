import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    // data: Buffer,
    // contentType: String,
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  released: {
    type: String,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const movie = mongoose.model("movie", MovieSchema);

export default movie;
