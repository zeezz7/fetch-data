import React, { useEffect, useState } from "react";
import MovieList from "./GETmethode/MovieList";
import AddMovie from "./POSTmethode/AddMovie";
import {
  Box,
  Skeleton,
  Stack,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHandler();
  }, []);

  // function fetchHandler() {
  //   fetch("https://react-http-49403-default-rtdb.firebaseio.com/movies.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const dataArr = [];
  //       for (const key in data) {
  //         dataArr.push({
  //           id: key,
  //           title: data[key].title,
  //           opText: data[key].opText,
  //           releaseDate: data[key].releaseDate,
  //         });
  //       }
  //       setMovies(dataArr);
  //       console.log(movies);
  //     });
  // }

  async function fetchHandler() {
    setIsLoading(true);
    const response = await fetch(
      "https://react-http-49403-default-rtdb.firebaseio.com/movies.json"
    );
    const data = await response.json();
    const dataArr = [];
    for (const key in data) {
      dataArr.push({
        id: key,
        title: data[key].title,
        opText: data[key].opText,
        releaseDate: data[key].releaseDate,
      });
    }
    setMovies(dataArr);
    console.log(movies);
    setIsLoading(false);
  }

  // const fetchHandler = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://react-http-49403-default-rtdb.firebaseio.com/movies.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("something went wrong");
  //     }
  //     const data = await response.json();
  //     console.log(data);

  //     const loadedMovie = [];
  //     for (const key in data) {
  //       loadedMovie.push({
  //         id: key,
  //         title: data[key].title,
  //         optext: data[key].opText,
  //         releaseDate: data[key].releaseDate,
  //       });
  //     }
  //     // const transformData = data.results.map((movie) => {
  //     //   return {
  //     //     title: movie.title,
  //     //     optext: movie.opening_crawl,
  //     //     releadeData: movie.release_date,
  //     //   };
  //     // });
  //     setMovies(loadedMovie);
  //   } catch (error) {
  //     setError(error.message);
  //   }

  //   setIsLoading(false);
  // };
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-49403-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  // let content = <p>Something went wrong</p>;

  // if (!isLoading) {
  //   content = <p>loagint***</p>;
  // }
  // if (!isLoading) {
  //   content = <MovieList movies={movies} />;
  // }
  return (
    <div>
      <AddMovie onAddMovie={addMovieHandler} />
      <button onClick={fetchHandler}>Fetch</button>
      {!isLoading && <MovieList movies={movies} />}
      {isLoading && <Skeleton />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Movies;
