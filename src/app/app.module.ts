import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { VersionModule } from '../version/version.module';
import { CharacterModule } from '../character/character.module';
import { PlanetModule } from '../planet/planet.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: () => {
        return {
          sortSchema: true,
          playground: true,
          autoSchemaFile: true,
          autoTransformHttpErrors: true,
          installSubscriptionHandlers: true,
          introspection: true,
          context: ({ req, connection }) => connection ? { req: connection.context } : { req },
        };
      },
      imports: [],
      inject: [],
    }),
    VersionModule,
    PlanetModule,
    CharacterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
