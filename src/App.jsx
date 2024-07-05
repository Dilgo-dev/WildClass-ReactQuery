import { useQuery } from "@tanstack/react-query";
import fetchRandomPokemon from "./services/fetchRandomPokemons";

export default function App() {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["pokemon"],
        queryFn: fetchRandomPokemon,
    });

    return (
        <>
            {isError ? (
                <p>🚏 Une erreur est survenue lors du chargement du pokemon</p>
            ) : null}
            {isLoading ? <p>🐲 Chargement du pokemon ! ...</p> : null}
            {data ? (
                <>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <button onClick={refetch}>Recharger</button>
                </>
            ) : null}
        </>
    );
}
