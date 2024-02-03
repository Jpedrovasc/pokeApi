import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PokedexController from '../controllers/PokedexController';

const pokedexRouter = Router();
const pokedexController = new PokedexController();

pokedexRouter.get("/",pokedexController.index);


pokedexRouter.post(
    '/Consultar',
    celebrate({
      [Segments.BODY]: {
        limitValue: Joi.string().optional()
      },
    }),
    pokedexController.pokemonConsultar
  );

pokedexRouter.post(
  '/Exibir',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required()
    },
  }),
  pokedexController.pokemonExibir
);

export default pokedexRouter;
