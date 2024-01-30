import { Router } from 'express';
import pokedexRouter from '../../../modules/Pokedex/routes/Pokedex.routes'


const routes = Router();

routes.use('/pokedex', pokedexRouter);

export default routes;
