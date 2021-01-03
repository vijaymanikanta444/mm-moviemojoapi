import express from "express";
import movie from "../modal/MovieModal";

const router = express.Router();

router.get("/", (req, res) => {
  movie
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

router.post("/", async (req, res) => {
  const { title, genre, released, image, director, actors, about } = req.body;
  try {
    const newMovie = new movie({
      title,
      image,
      genre,
      released,

      director,
      actors,
      about,
    });
    const movie1 = await newMovie.save();

    res.json(movie1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error..!");
  }
});

export default router;
