import { Module } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetResolver } from './planet.resolver';
import { StarWarsAdapter } from '../star-wars/star-wars.adapter';

@Module({
  providers: [
    PlanetService,
    PlanetResolver,
    {
      provide: 'ADAPTER',
      useValue: new StarWarsAdapter(),
    },
  ],
})
export class PlanetModule {}