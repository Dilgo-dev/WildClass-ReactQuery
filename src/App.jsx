import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "./services/fetchPokemons";

export default function App() {
    const [id, setId] = useState(1);
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["pokemon", id],
        queryFn: () => fetchPokemon(id),
    });

    const handleChangeId = (event) => {
        setId(event.target.value);
        refetch();
    };

    return (
        <>
            {isError ? (
                <p>🚏 Une erreur est survenue lors du chargement du pokemon</p>
            ) : null}
            {isLoading ? <p>🐲 Chargement du pokemon ! ...</p> : null}
            {data ? (
                <>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <input type="number" onChange={handleChangeId} value={id} />
                </>
            ) : null}
        </>
    );
}
