import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PlanetService } from './planet.service';
import { Planet, Planets } from './planet.type';

@Resolver(() => Planet)
export class PlanetResolver {
  constructor(
    private readonly planetService: PlanetService,
  ) {}

  @Query(() => Planet)
  async planet(@Args('id', { type: () => Int }) id: number): Promise<Planet> {
    return this.planetService.planet(id);
  }

  @Query(() => Planets)
  async planets(@Args('page', { type: () => Int, nullable: true, defaultValue: 1 }) page?: number): Promise<Planets> {
    return this.planetService.planets(page);
  }
}
