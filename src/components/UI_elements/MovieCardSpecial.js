import React from "react";

import StarRating from "./StarRating";
import "./movieCardSpecial.css";
import { calculateAverage } from "../utils/calculateAverage";

const MovieCard = ({ movie, comments }) => {
  const { title, overview, poster_path } = movie;

  return (
    <React.Fragment>
      <div className="container__movie-card-whole">
        <div className="container__movie-card">
          <div className="movie">
            <div
              className="movie-img"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster_path})`,
              }}
            ></div>
            <div className="text-movie-cont">
              <div className="col1">
                <h1>{title}</h1>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
              </div>
              <div className="col1">
                <p className="movie-description">{overview}</p>
                <div className="star-rating">
                  <StarRating
                    value={calculateAverage(comments)}
                    edit={false}
                    size={35}
                    isHalf={true}
                  />
                  {` | `}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
