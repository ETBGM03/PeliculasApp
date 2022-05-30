import axios from 'axios';

export const movieApi = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
  params: {
    api_key: '5b4a7c551ebef142552d5f22db66022f',
    language: 'es-ES',
  },
});
