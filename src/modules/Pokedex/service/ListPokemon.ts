import axios, { AxiosResponse } from 'axios';
import { InformcaoConsultaPokemon } from '../entites/informacaoConsultaPokemon';
import { InformacaoGeralPokemon } from '../entites/informacaoGeralPokemon';
import { Pokemon } from '../entites/pokemon';


class ListPokemon {
  public async execute(data: { limitValue: string }) {
    try {
      const limit = GetLimite(data.limitValue);

      const limitPrimario = limit[0];
      const limitSecundario = limit[1];      
      const urlConsulta = `https://pokeapi.co/api/v2/pokemon?offset=${limitPrimario}&limit=${limitSecundario}`;

      const response: AxiosResponse = await axios.get(urlConsulta);
      const pokemonLista: InformcaoConsultaPokemon[] = response.data.results;

      const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
        const responseInformacaoGeralPokemon: AxiosResponse = await axios.get(url);
        const pokemonInfoGerais: InformacaoGeralPokemon = responseInformacaoGeralPokemon.data;

        const identificadorPokemon = GetIdentificadorIdPokemon(pokemonInfoGerais.id);

        const types: string[] = pokemonInfoGerais.types.map((typeDetail) => typeDetail.type.name);

        return {
          id: pokemonInfoGerais.id.toString(),
          name: pokemonInfoGerais.name,
          imagem: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${identificadorPokemon}.png`,
          types,
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
};

function GetLimite(numero: string): number[] {
  let valorPrimario = 0;
  let valorSecundario = 0;

  if (parseInt(numero) === 0) {
    valorPrimario = 0;
    valorSecundario = 12;
  } else {
    valorPrimario = parseInt(numero);
    valorSecundario = 12;
  }

  return [valorPrimario, valorSecundario];
};

export default ListPokemon;
