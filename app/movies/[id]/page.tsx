import React, { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/MovieInfo";
import MovieVideos from "../../../components/MovieVideos";

interface IParameters {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParameters) => {
  //generateMetadata를 사용해서 컴포넌트 파라미터를 동일하게 받아올 수 있음
  const movie = await getMovie(id); // 동일한 api요청은 최초 호출 시에만 사용되고, MovieInfo에서는 캐싱처리
  return { title: `${movie.title}` };
};

const page = ({ params: { id } }: IParameters) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default page;
