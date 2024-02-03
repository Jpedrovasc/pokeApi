import { Request,Response } from "express"
import ListPokemon from '../service/ListPokemon';
import ExibirPokemon from '../service/ExibirPokemon';

export default class PokedexController {

    public async index(request: Request, response: Response) {
        const listDocumentos = {
            nome: "João",
            idade: 22,
            profissao: "Desenvolvedor"
        };

        return response.json(listDocumentos);
    }

    public async pokemonConsultar(request: Request, response: Response): Promise < Response > {
        try {

            const listarPokemons = new ListPokemon;

            const result = await listarPokemons.execute(request.body)

            return response.json(result);
            
        } catch (error) {
            return response.status(500).json({
                Error: 'Erro ao buscar Pokémon: ' + error
            });
        }
    }
    public async pokemonExibir(request: Request, response: Response): Promise < Response > {
        try {

            const Pokemon = new ExibirPokemon;

            const result = await Pokemon.execute(request.body)

            return response.json(result);
            
        } catch (error) {
            return response.status(500).json({
                Error: 'Erro ao buscar Pokémon: ' + error
            });
        }
    }
}
