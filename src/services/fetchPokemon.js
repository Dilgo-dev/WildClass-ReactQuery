import axios from "axios";

const fetchPokemon = (id) => {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.data);
};

export default fetchPokemon;
