import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalState";

import MovieCard from "../UI_elements/MovieCardSpecial";
import Comments from "../UI_elements/Comments";
import CommentForm from "../UI_elements/CommentForm";
import { calculateAverage } from "../utils/calculateAverage";

export const Movie = () => {
  const { watched, watchlist } = useContext(GlobalContext);
  const { movieId } = useParams();
  const [formVisible, setFormVisible] = useState(false);
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")).filter(
      (comment) => comment.movieId === movieId
    )
  );

  let movies = watchlist.concat(watched);
  let selectedMovie = movies.find((movie) => movie.id.toString() === movieId);

  return (
    <div className="movie-container">
      <div className="movie-container__movie-card">
        <MovieCard
          movie={selectedMovie}
          average={calculateAverage(comments, movieId)}
          visibility={formVisible}
          setVisibility={setFormVisible}
        />
      </div>
      <div className="movie-container__comment-form">
        <CommentForm
          setComments={setComments}
          comments={comments}
          setVisible={setFormVisible}
        />
      </div>
      <div className="movie-container__comments">
        <Comments comments={comments} />
      </div>
    </div>
  );
};
