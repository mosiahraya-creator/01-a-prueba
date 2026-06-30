// components/PokemonList.tsx
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import type { Pokemon } from "../interfaces/Pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    obtenerPokemons();
  }, []);

  const obtenerPokemons = async () => {
    try {
      // Obtiene los primeros 10
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );

      const data = await response.json();

      // Obtiene la información completa de cada Pokémon
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemons(pokemonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
