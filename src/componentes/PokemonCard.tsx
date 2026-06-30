import type { Pokemon } from "../interfaces/Pokemon";
import "./PokemonCard.css";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>

      <p>ID: #{pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;