import { API_KEY, page_number } from './constants';

export const createRequestToken = `authentication/token/new?api_key=${API_KEY}`;
export const validateTokenWithLogin = `authentication/token/validate_with_login?api_key=${API_KEY}`;
export const createSession = `authentication/session/new?api_key=${API_KEY}`;
export const getAccountDetails = `account?api_key=${API_KEY}&session_id=`;

export const getPopular = `movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page_number}`;
export const getDetails = `movie/550?api_key=${API_KEY}&language=pt-BR`;
export const getCredits = `movie/2/credits?api_key=${API_KEY}&language=pt-BR`;
