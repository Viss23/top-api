import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TopLevelCategory } from '../top-page.model';

export type TopPageDocument = TopPage & Document;

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
export const HHSchema = SchemaFactory.createForClass(HH);

@Schema()
export class TopPageAdvantages {
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export const TopPageAdvantagesSchema =
  SchemaFactory.createForClass(TopPageAdvantages);

@Schema()
export class TopPage {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;
  @Prop()
  secondCategory: string;
  @Prop()
  title: string;
  @Prop()
  category: string;
  @Prop({ type: HHSchema })
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

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
