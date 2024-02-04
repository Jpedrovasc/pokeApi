import axios, { AxiosResponse } from 'axios';
import { InformcaoConsultaPokemon } from '../entites/informacaoConsultaPokemon';
import { InformacaoGeralPokemon } from '../entites/informacaoGeralPokemon';
import { Pokemon } from '../entites/pokemon';

class GetPokemonFiltro {
  public async execute(data: { id: string }) {
    try {
      const urlConsulta = `https://pokeapi.co/api/v2/pokemon/${data.id}/`;

      const response: AxiosResponse<InformacaoGeralPokemon> = await axios.get(urlConsulta);
      const pokemonInfoGerais: InformacaoGeralPokemon = response.data;

      const identificadorPokemon = GetIdentificadorIdPokemon(pokemonInfoGerais.id);

      const types: string[] = pokemonInfoGerais.types.map((typeDetail) => {
        const formatarTypes = typeDetail.type.name.charAt(0).toUpperCase() + typeDetail.type.name.slice(1);
        return formatarTypes;
      });
          
      const moves: string[] = pokemonInfoGerais.moves.map((moveDetail) => {
        return moveDetail.move.name.charAt(0).toUpperCase() + moveDetail.move.name.slice(1);
      });

      const abilities: string[] = pokemonInfoGerais.abilities.map((abilityDetail) => {
        return abilityDetail.ability.name.charAt(0).toUpperCase() + abilityDetail.ability.name.slice(1);
      });
      

      const NomeFormatado = pokemonInfoGerais.name.charAt(0).toUpperCase() + pokemonInfoGerais.name.slice(1);

      const pokemon: Pokemon = {
        id: pokemonInfoGerais.id,
        name: NomeFormatado,
        imagem: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${identificadorPokemon}.png`,
        types: types,
        abilities: abilities,
        moves: moves,
      };

      return pokemon;
    } catch (error) {
      throw error;
    }
  }
}

function GetIdentificadorIdPokemon(numero: string): string {
  let valor = '';

  if (parseInt(numero) < 10) {
    valor += '00' + numero.toString();
  } else if (parseInt(numero) < 100) {
    valor = '0' + numero.toString();
  } else {
    valor = numero.toString();
  }
  return valor;
}

export default GetPokemonFiltro;
