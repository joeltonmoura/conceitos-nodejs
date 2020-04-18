import { Router } from 'express';
import route from './repositories.routes';

const routes = Router();

routes.use('/repositories', route);

export default routes;
