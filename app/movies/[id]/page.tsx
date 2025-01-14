import { Metadata } from "next";
import React, { Suspense } from "react";
import MovieInfo from "../../../components/MovieInfo";
import MovieVideos from "../../../components/MovieVideos";

export const metadata: Metadata = {
  title: "movies",
};

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default page;
