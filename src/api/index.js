import axios from "axios";

export const fetchCharacters = async (page = 1) => {
  const URL = "https://rickandmortyapi.com/api/character";

  const response = await axios.get(`${URL}/?page=${page}`);
  return response.data.results;
};

export const fetchDetails = async (characterId) => {
  const URL = "https://rickandmortyapi.com/api/character";

  const detailsResponse = await axios.get(`${URL}/${characterId}`);
  return detailsResponse.data;
};

export const fetchSearch = async (name = "") => {
  const URL = "https://rickandmortyapi.com/api/character";

  const detailsResponse = await axios.get(`${URL}/?name=${name}`);
  return detailsResponse.data.results;
};
