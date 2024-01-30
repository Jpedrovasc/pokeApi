import { Request,Response } from "express"
import ListPokemon from '../service/ListPokemon';

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

            if (result.length === 0) {
                return response.status(500).json({
                    error: 'Pokémon Não Existe na base de dados'
                });
            }

            return response.json(result);
            
        } catch (error) {
            return response.status(500).json({
                Error: 'Erro ao buscar Pokémon: ' + error
            });
        }
    }
}