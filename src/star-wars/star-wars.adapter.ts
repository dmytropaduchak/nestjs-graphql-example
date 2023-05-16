import { Character, Planet, Results } from './star-wars.type';

export class StarWarsAdapter {
  private readonly url = 'https://swapi.dev/api';

  private async safe<T, D>(response: Response, cb: (data: D) => T): Promise<T> {
    if (response.ok) {
      const json = await response.json();
      return cb(json);
    }
    throw new Error(response.statusText);
  }
  private toCharacter(data: Character) {
    const characterId = data.url.match(/\/people\/(\d+)[\?]?/);
    const planetId = data.homeworld.match(/\/planets\/(\d+)[\?]?/);
    return {
      id: Number(characterId[1]),
      name: data.name, 
      hairColor: data.hair_color,
      skinColor: data.skin_color,
      eyeColor: data.eye_color,
      birthYear: data.birth_year,
      planetId: Number(planetId[1])
    };
  }
  private toCharacters(data: Results<Character>) {
    const total = data.count;
    const edges = data.results.map(this.toCharacter);
    return { total, edges };
  }
  private toPlanet(data: Planet) {
    const planetId = data.url.match(/\/planets\/(\d+)[\?]?/);
    return {
      id: Number(planetId[1]),
      name: data.name, 
      climate: data.climate,
      gravity: Number(data.gravity),
    };
  }
  private toPlanets(data: Results<Planet>) {
    const total = data.count;
    const edges = data.results.map(this.toPlanet);
    return { total, edges };
  }
  async character(id: number) {
    const response = await fetch(`${this.url}/people/${id}`);
    return this.safe(response, this.toCharacter.bind(this));
  }
  async characters(page = 1) {
    const response = await fetch(`${this.url}/people?page=${page}`);
    return this.safe(response, this.toCharacters.bind(this));
  }
  async planet(id: number) {
    const response = await fetch(`${this.url}/planets/${id}`);
    return this.safe(response, this.toPlanet.bind(this));
  }
  async planets(page = 1) {
    const response = await fetch(`${this.url}/planets?page=${page}`);
    return this.safe(response, this.toPlanets.bind(this));
  }
}