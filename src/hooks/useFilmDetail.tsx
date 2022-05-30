import {useState, useEffect} from 'react';
import {movieApi} from '../api/Movie';
import {FilmDetails} from '../interfaces/movie';
import {CredistResponse, Cast} from '../interfaces/credits';
interface MovieDetail {
  isLoading: boolean;
  movieFull?: FilmDetails;
  cast: Cast[];
}

export const useFilmDetails = (id: number) => {
  const [state, setstate] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });
  const getMoviedetail = async () => {
    const resMovieDetails = await movieApi.get<FilmDetails>(`/${id}`);
    const castMovieDetails = await movieApi.get<CredistResponse>(
      `/${id}/credits`,
    );

    const [movieDetailsResponse, castDtailsResponse] = await Promise.all([
      resMovieDetails,
      castMovieDetails,
    ]);

    setstate({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castDtailsResponse.data.cast,
    });
  };
  useEffect(() => {
    getMoviedetail();
  }, [id]);

  return {...state};
};
