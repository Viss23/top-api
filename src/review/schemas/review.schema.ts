import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

//export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review extends Document {
  @Prop()
  name: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  rating: number;
  @Prop()
  productId: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
