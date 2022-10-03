import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopPageDocument = TopPage & Document;

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}
@Schema()
export class HH {
  @Prop()
  count: number;
  @Prop()
  juniorSalary: number;
  @Prop()
  middleSalary: number;
  @Prop()
  seniorSalary: number;
}

@Schema()
export class TopPageAdvantages {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TopPageAdvantagesSchema =
  SchemaFactory.createForClass(TopPageAdvantages);

@Schema({ timestamps: true })
export class TopPage extends Document {
  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;

  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: HH })
  hh?: HH;

  @Prop([TopPageAdvantagesSchema])
  advantages: TopPageAdvantages[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop([String])
  tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage).index({
  seoText: 'text',
  title: 'text',
});
