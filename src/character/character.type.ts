import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Planet } from '../planet/planet.type';
import { Edges } from '../types/edges';

@ObjectType()
export class Character {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  hairColor: string;

  @Field()
  skinColor: string;

  @Field()
  eyeColor: string;

  @Field()
  birthYear: string;

  @Field(() => Planet)
  planet: Planet;
}

@ObjectType()
export class Characters extends Edges(Character) {}
