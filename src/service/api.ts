import axios from 'axios';

const apiCharacter = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/',
  timeout: 8000
});

export {
  apiCharacter
};