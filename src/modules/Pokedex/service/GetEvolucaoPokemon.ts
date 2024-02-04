import axios, { AxiosResponse } from 'axios';

interface EvolucaoPokemon {
  evolution_chain: {
    url: string;
  };
}

interface Pokemon {
  id: string;
  name: string;
  imagem: string;
}

class GetEvolucaoPokemon {

  public async execute(data: { id: string }): Promise<Pokemon> {
    try {
      const urlConsulta = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;
      const response: AxiosResponse<EvolucaoPokemon> = await axios.get(urlConsulta);

      const evolucoes = response.data.evolution_chain.url;

      const pokemon: Pokemon = {
        id: data.id,
        name: "",
        imagem: 'URL_da_imagem',  // Substitua pelo URL real da imagem
      };

      return pokemon;
    } catch (error) {
      throw error;
    }
  }
}

export default GetEvolucaoPokemon;
