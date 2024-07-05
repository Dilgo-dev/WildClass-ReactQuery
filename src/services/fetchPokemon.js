import axios from "axios";

const fetchPokemon = () => {
    return axios
        .get("https://pokeapi.co/api/v2/pokemo")
        .then((response) => response.data)
        .catch(() => {
            throw new Error(
                "Impossible de récupérer les données du Pokemon. 🧯"
            );
        });
};

export default fetchPokemon;
