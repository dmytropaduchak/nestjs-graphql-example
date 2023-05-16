import { Planet, Planets } from '../planet/planet.type';
import { Character, Characters } from '../character/character.type';

export abstract class Adapter {
  abstract character(id: number): Promise<Character>;
  abstract characters(page?: number): Promise<Characters>;
  abstract planet(id: number): Promise<Planet>;
  abstract planets(page?: number): Promise<Planets>;
}
