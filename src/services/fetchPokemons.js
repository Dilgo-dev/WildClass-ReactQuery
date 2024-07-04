import axios from "axios";

const fetchPokemon = () => {
    return axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response) => response.data);
};

export default fetchPokemon;
