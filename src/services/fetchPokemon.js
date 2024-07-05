import axios from "axios";

const fetchRandomPokemon = (id) => {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.data);
};

export default fetchRandomPokemon;
