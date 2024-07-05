import axios from "axios";

const fetchRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 100) + 1;
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then((response) => response.data);
};

export default fetchRandomPokemon;
