import { Inject, Injectable } from '@nestjs/common';
import { Planet, Planets } from './planet.type';
import { Adapter } from '../adapter/adapter';

@Injectable()
export class PlanetService {
  constructor(
    @Inject('ADAPTER') private readonly adapter: Adapter,
  ) {}
  async planet(id: number): Promise<Planet> {
    return this.adapter.planet(id);
  }
  async planets(page: number): Promise<Planets> {
    return this.adapter.planets(page);
  }
}
