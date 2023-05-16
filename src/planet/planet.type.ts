import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Edges } from '../types/edges';

@ObjectType()
export class Planet {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  climate: string;

  @Field(() => Int)
  gravity: number;

  planetId: number;
}

@ObjectType()
export class Planets extends Edges(Planet) {}

