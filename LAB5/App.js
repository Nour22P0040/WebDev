import React, { useState } from "react";
import "./styles.css";

function App() {
  const [movies, Movies] = useState([]);
  const [movieName, MovieName] = useState("");
  const [comment, Comment] = useState("");
  const [rating, Rating] = useState(0);

  const addMovie = () => {
    if (!movieName) return alert("Please enter name of the movie");

    const newMovie = {
      id: Date.now(),
      name: movieName,
      comment: comment || "No review added.",
      rating,
    };

    Movies([...movies, newMovie]);
    MovieName("");
    Comment("");
    Rating(0);
  };

  const removeMovie = (id) => {
    Movies(movies.filter((m) => m.id !== id));
  };

  const renderStars = (num) => "🌟".repeat(num);

  return (
    <div className="container">
      <h1>🎬 My Movies Watch List</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Movie name"
          value={movieName}
          onChange={(e) => MovieName(e.target.value)}
        />
        <textarea
          placeholder="Your comment..."
          value={comment}
          onChange={(e) => Comment(e.target.value)}
        ></textarea>

        <div className="rating">
          <label>Rate: </label>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={rating >= num ? "star selected" : ""}
              onClick={() => Rating(num)}
            >
              🌟
            </span>
          ))}
        </div>

        <button onClick={addMovie}>Add Movie</button>
      </div>

      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.name}</h3>
            <p>{renderStars(movie.rating)}</p>
            <p className="comment"> Comment: {movie.comment}</p>
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
