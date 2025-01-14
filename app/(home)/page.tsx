import { Metadata } from "next";
import React from "react";
import Movie from "../../components/Movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constans";

export const metadata: Metadata = {
  title: "Home",
};

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
};

const page = async () => {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default page;
