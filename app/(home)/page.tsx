import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
};

const page = async () => {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default page;
