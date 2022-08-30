import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class ProductCharacteristics {
  @Prop()
  name: string;
  @Prop()
  value: string;
}

export const ProductCharacteristicsSchema = SchemaFactory.createForClass(
  ProductCharacteristics,
);

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop()
  image: string;
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  oldPrice?: number;
  @Prop()
  credit: number;
  @Prop()
  description: string;
  @Prop()
  advantages: string;
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
