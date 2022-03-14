import { API_KEY, PAGE_NUMBER } from "./constants";

export const getPopular = `movie/popular?api_key=${API_KEY}&language=pt-BR&page=${PAGE_NUMBER}`;
export const getDetails = `movie/550?api_key=${API_KEY}&language=pt-BR`;
export const getCredits = `movie/2/credits?api_key=${API_KEY}&language=pt-BR`;
    