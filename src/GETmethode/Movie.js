import React from "react";

const Movie = (props) => {
  return (
    <div>
      <li>
        <h2>{props.title}</h2>
        <p>{props.optext}</p>
        <p>{props.releaseDate}</p>
      </li>
    </div>
  );
};

export default Movie;
