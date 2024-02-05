import axios, {
  AxiosResponse
} from 'axios';

interface EvolucaoPokemon {
  chain: any;
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

  public async execute(data: {
      id: string
  }): Promise < string[] > {
      try {
          const urlConsulta = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;
          const response: AxiosResponse < EvolucaoPokemon > = await axios.get(urlConsulta);

          const Urlevolucoes = response.data.evolution_chain.url;

          const responseEvolucoes: AxiosResponse < EvolucaoPokemon > = await axios.get(Urlevolucoes);

          const dadosRetorno = responseEvolucoes.data;

          console.log(dadosRetorno);

          const evolucoes: string[] = [];

          // Acesse a cadeia de evolução
          const evolutionChain = dadosRetorno.chain;

          // Adicione o nome do Pokémon inicial ao array
          evolucoes.push(evolutionChain.species.name);

          // Verifique se há uma primeira evolução
          if (evolutionChain.evolves_to.length > 0) {
              const primeiraEvolucao = evolutionChain.evolves_to[0];
              evolucoes.push(primeiraEvolucao.species.name);

              // Verifique se há uma segunda evolução
              if (primeiraEvolucao.evolves_to.length > 0) {
                  const segundaEvolucao = primeiraEvolucao.evolves_to[0];
                  evolucoes.push(segundaEvolucao.species.name);
              }
          }

          return evolucoes;
      } catch (error) {
          throw error;
      }
  }
}

export default GetEvolucaoPokemon;