import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Game {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: String;
  @Field(() => String)
  platform: String;
}
