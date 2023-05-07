import axios from 'axios';

const apiCharacter = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/',
  timeout: 8000
});
const apiLocation = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/location/',
  timeout: 8000
});
const apiEpisode = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/episode/',
  timeout: 8000
});

export {
  apiCharacter,
  apiLocation,
  apiEpisode
};