import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPage, TopPageSchema } from './schemas/top-page.schema';
import { TopPageController } from './top-page.controller';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([{ name: TopPage.name, schema: TopPageSchema }]),
  ],
})
export class TopPageModule {}
