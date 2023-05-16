import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export const Edges = <T>(type: Type<T>) => {
  @ObjectType({ isAbstract: true })
  abstract class Edges {
    @Field(() => [type])
    edges: T[];

    @Field(() => Int)
    total: number;
  }
  return Edges;
}
