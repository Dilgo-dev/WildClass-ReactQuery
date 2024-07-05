import axios from "axios";

const fetchPokemon = () => {
    return axios
        .get("https://pokeapi.co/api/v2/pokemo")
        .then((response) => response.data);
};

export default fetchPokemon;
