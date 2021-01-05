import mongoose from "mongoose";
import { ArtistSchema } from "./ArtistSchema";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  genre: {
    type: String,
  },
  released: {
    type: String,
  },

  about: {
    type: String,
  },
  rating: {
    type: String,
  },

  artists: [ArtistSchema],
  keywords: [{ type: String }],
});

const movie = mongoose.model("movie", MovieSchema);

export default movie;
