import { Router } from 'express';

import RepositoriesRepository from '../repository/RepositorieRepository';
import CreateRepositorieService from '../services/CreateRepositorieService';

const route = Router();
const repositoriesRepository = new RepositoriesRepository();


route.post('/', (request, response) => {
  const { title, url, techs, likes } = request.body;

  const creteRepositorie = new CreateRepositorieService(
    repositoriesRepository,
  );

  const repositori = creteRepositorie.execute({
    title,
    url,
    techs,
    likes,
  });

  return response.status(200).json(repositori);
});



export default route;
