import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ArtistSchema = new Schema({
  name: {
    type: String,
  },
  dob: {
    type: Date,
  },
  role: {
    type: String,
  },
});

const artist = mongoose.model("artist", ArtistSchema);
// export ArtistSchema;
export default artist;
