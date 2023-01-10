import React, { useRef } from "react";

const AddMovie = (props) => {
  const titleRef = useRef("");
  const opTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      opText: opTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    props.onAddMovie(movie);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Movie Titel</label>
        <input type="text" ref={titleRef} />
        <label>About Movie</label>
        <input type="text" ref={opTextRef} />
        <label>release Data</label>
        <input type="text" ref={releaseDateRef} />
        <button type="submit"> Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
