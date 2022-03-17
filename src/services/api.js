/* eslint-disable prettier/prettier */
import axios from 'axios';
import {URL, API_KEY, LANGUAGE, PAGE_NUMBER} from '../constants/constants';
//  Requições de todos os filmes
export const fetchMovies = async () => {
  const response = await axios.get(
    `${URL}movie/popular?api_key=${API_KEY}&${LANGUAGE}page=&${PAGE_NUMBER}`,
  );
  return [...response.data.results];
};
//  Requições de informações do filme escolhido
export const fetchDetails = async id => {
  const {data} = await axios.get(
    `${URL}movie/${id}?api_key=${API_KEY}&${LANGUAGE}`,
  );
  return {
    backdrop: data.backdrop_path,
    poster: data.poster_path,
    title: data.title,
    runtime: data.runtime,
    releaseDate: data.release_date,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
    overview: data.overview
  }
};

//  Requições de informações da direção / elenco
export const fetchCredits = async id => {
  const response = await axios.get(
    `${URL}movie/${id}/credits?api_key=${API_KEY}&${LANGUAGE}`,
  );

  // Buscando o diretor
  const director = response.data.crew.find(
    dir => dir.job === 'Director',
  );

  // Buscando atores/personagens do filme
  const cast = response.data.cast.map(name => {
    return {
      id: name.id,
      originalName: name.original_name,
      characterName: name.character,
      profilePath: name.profile_path
    };
  });

  console.log(cast);

  const credits = response.data;
  return {
    director: director,
    credits: credits,
    cast: cast
  };
};
