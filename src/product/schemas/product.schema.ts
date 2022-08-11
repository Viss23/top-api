import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

class ProductCharacteristics {
  @Prop()
  name: string;
  @Prop()
  value: string;
}

export const ProductCharacteristicsSchema = SchemaFactory.createForClass(
  ProductCharacteristics,
);

@Schema()
export class Product {
  @Prop()
  image: string;
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  oldPrice: number;
  @Prop()
  credit: number;
  @Prop()
  calculatedRating: number;
  @Prop()
  description: string;
  @Prop()
  advantage: string;
  @Prop()
  disAdvantage: string;
  @Prop([String])
  categories: string[];
  @Prop([String])
  tags: string[];
  @Prop([ProductCharacteristicsSchema])
  characteristics: ProductCharacteristics[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
