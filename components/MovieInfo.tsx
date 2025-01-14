import { API_URL } from "../app/constans";
import styles from "../styles/movieInfo.module.css";

export const getMovie = async (id: string) => {
  //throw new Error("Error!!");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          🎬 Homepage
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
