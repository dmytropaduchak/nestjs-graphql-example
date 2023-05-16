import { Args, Int, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { CharacterService } from './character.service';
import { Character, Characters } from './character.type';
import { Planet } from '../planet/planet.type';
import { PlanetService } from '../planet/planet.service';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(
    private readonly characterService: CharacterService,
    private readonly planetService: PlanetService,
  ) {}

  @Query(() => Character)
  async character(@Args('id', { type: () => Int }) id: number): Promise<Character> {
    return this.characterService.character(id);
  }

  @Query(() => Characters)
  async characters(@Args('page', { type: () => Int, nullable: true, defaultValue: 1 }) page?: number): Promise<Characters> {
    return this.characterService.characters(page);
  }

  @ResolveProperty('planet', () => Planet)
  async planet(@Parent() parent: Planet) {
    return this.planetService.planet(parent.planetId);
  }
}
