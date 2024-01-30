import axios, { AxiosResponse } from 'axios';
import { InformcaoConsultaPokemon } from '../entites/informacaoConsultaPokemon';
import { InformacaoGeralPokemon } from '../entites/informacaoGeralPokemon';
import { Pokemon } from '../entites/pokemon';

class ListPokemon {
  public async execute(data: { limitValue: string }) {
    try {
      const limit = parseInt(data.limitValue) || 12;
      const urlConsulta = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

      const response: AxiosResponse = await axios.get(urlConsulta);
      const pokemonLista: InformcaoConsultaPokemon[] = response.data.results;

      const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
        const responseInformacaoGeralPokemon: AxiosResponse = await axios.get(url);
        const pokemonInfoGerais: InformacaoGeralPokemon = responseInformacaoGeralPokemon.data;

        const identificadorPokemon = GetIdentificadorIdPokemon(pokemonInfoGerais.id);
        
        return {
          id: pokemonInfoGerais.id.toString(),
          name: pokemonInfoGerais.name,
          imagem: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${identificadorPokemon}.png`,
        };
      };

      // Usar Promise.all para realizar as chamadas simultaneamente
      const pokemons: Pokemon[] = await Promise.all(
        pokemonLista.map((pokemon) => fetchPokemonDetails(pokemon.url))
      );

      return pokemons;
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

export default ListPokemon;
