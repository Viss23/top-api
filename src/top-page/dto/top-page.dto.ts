import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsOptional,
  IsArray,
  IsObject,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { TopLevelCategory } from '../schemas/top-page.schema';

class HHDto {
  @IsNumber()
  count: number;

  @IsNumber()
  juniorSalary: number;

  @IsNumber()
  middleSalary: number;

  @IsNumber()
  seniorSalary: number;
}

class AdvantagesDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class TopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

  @IsString()
  secondCategory: string;

  @IsString()
  alias: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => HHDto)
  hh?: HHDto;

  @IsArray()
  @ValidateNested()
  @Type(() => AdvantagesDto)
  advantages: AdvantagesDto[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
