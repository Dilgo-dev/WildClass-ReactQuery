import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "./services/fetchPokemons";

export default function App() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["pokemon"],
        queryFn: fetchPokemon,
    });

    return (
        <>
            {isError ? (
                <p>🚏 Une erreur est survenue lors du chargement du pokemon</p>
            ) : null}
            {isLoading ? <p>🐲 Chargement du pokemon ! ...</p> : null}
            {data ? (
                <img src={data.sprites.front_default} alt={data.name} />
            ) : null}
        </>
    );
}
