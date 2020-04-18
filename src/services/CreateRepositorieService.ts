import Repositorie from '../models/Repositories';
import RepositorieRepository from '../repository/RepositorieRepository';


interface Request {
    title: string;
    url: string;
    techs: Array<string>;
    likes: number;
}

export default  class CreateRepositorieService {
  private  repositorieRepository: RepositorieRepository;

  constructor(repositorieRepository: RepositorieRepository ){
    this.repositorieRepository = repositorieRepository;
  }

  public execute( { title, url, techs, likes }: Request): Repositorie{

    const repository = this.repositorieRepository.create({
      title,
      url,
      techs,
      likes,
    });

    return repository;
  }

}
