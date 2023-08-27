import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGameInput {
  //the field decorator can be empty if the property is a string
  //for number property @Field(()=>Int) as so on
  @Field()
  title: string;
  @Field()
  platform: string;
}
