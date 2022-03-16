import axios from "axios";
import { URL, API_KEY, LANGUAGE } from "../constants/constants"
  //  Requições de todos os filmes 
export const fetchMovies = async () => {
      const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}&${LANGUAGE}`)
      return [...response.data.results];
    };
    //  Requições de informações do filme escolhido
  export const fetchDetails = async (id) => {
      const response = await axios.get(
      `${URL}movie/${id}?api_key=${API_KEY}&${LANGUAGE}`)
  };
   //  Requições de informações da direção / elenco
  export const fetchCredits = async (id) => {
    const response = await axios.get(
      `${URL}movie/${id}/credits?api_key=${API_KEY}&${LANGUAGE}`);

    // Buscando o diretor
    const director = response.data.crew.find((dir) => dir.known_for_department === 'Directing');
    
    // Buscando atores/personagens do filme 
    const actores = response.data.cast.map((name) => {
      return {
        orinalName: name.original_name,
        characterName: name.character
      }
    })
    
  console.log(actores)

    const credits = response.data;
      return { director: director, credits: credits, actores: actores };
  };

