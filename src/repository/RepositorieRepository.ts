import Repositorie from '../models/Repositories';

interface RepositorieDTO{
  title: string;
  url: string;
  techs: Array<string>;
  likes: number;
}

class RepositoriesRepository {
  private respositories: Repositorie[] = [];

  constructor(){
    this.respositories = [];
  }

  public create({ title, url, likes, techs }: RepositorieDTO): Repositorie {
    const repositorie = new Repositorie({
      title,
      url,
      likes,
      techs,
    })

    this.respositories.push(repositorie);

    return repositorie;
  }
}

export default RepositoriesRepository;
