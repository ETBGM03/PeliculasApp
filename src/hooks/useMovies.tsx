import {useEffect, useState} from 'react';
import {movieApi} from '../api/Movie';
import {MovieInterface, Movie} from '../interfaces/movie';

interface MoviesState {
  newPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesState>();

  const getMovies = async () => {
    //multiples llamadas a la api simultaneas
    // const {data: data1} = await movieApi.get('/now_playing');
    // const {data: data2} = await movieApi.get('/popular');
    // setMovies(data1.results);
    // setMoviesPopulares(data2.results);

    const nowPlaying = movieApi.get<MovieInterface>('/now_playing');
    const popular = movieApi.get<MovieInterface>('/popular');
    const topRated = movieApi.get<MovieInterface>('/top_rated');
    const upComing = movieApi.get<MovieInterface>('/upcoming');
    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upComing,
    ]);
    setMovies({
      newPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);

  return {
    ...movies,
    isLoading,
  };
};

export default useMovies;
