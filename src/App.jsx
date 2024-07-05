import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "./services/fetchPokemons";

export default function App() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["pokemon"],
        queryFn: fetchPokemon,
        retry: false,
    });

    return (
        <>
            {isError ? (
                <p>
                    🚏 Une erreur est survenue lors du chargement du pokemon:{" "}
                    {error.message}
                </p>
            ) : null}
            {isLoading ? <p>🐲 Chargement du pokemon ! ...</p> : null}
            {data ? (
                <>
                    <img src={data.sprites.front_default} alt={data.name} />
                </>
            ) : null}
        </>
    );
}
