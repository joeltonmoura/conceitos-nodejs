import { uuid } from 'uuidv4';

class Respositories {
  id: string;

  title: string;

  url: string;

  techs: Array<string>;

  likes: number;

  constructor({ title, url, techs, likes }: Omit<Respositories, 'id'>){
    this.id = uuid();
    this.title = title;
    this.url = url;
    this.techs = techs;
    this.likes = likes;
  }
}

export default Respositories;
