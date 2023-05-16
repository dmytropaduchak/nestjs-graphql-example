import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterResolver } from './character.resolver';
import { PlanetService } from '../planet/planet.service';
import { StarWarsAdapter } from '../star-wars/star-wars.adapter';

@Module({
  providers: [
    PlanetService,
    CharacterService,
    CharacterResolver,
    {
      provide: 'ADAPTER',
      useValue: new StarWarsAdapter(),
    },
  ],
})
export class CharacterModule {}