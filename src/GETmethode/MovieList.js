import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li>
              <h2>{movie.title}</h2>
              <p>{movie.opText}</p>
              <p>{movie.releaseDate}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
