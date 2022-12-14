import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
