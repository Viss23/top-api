import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { ReviewService } from './review.service';
import { Review } from './schemas/review.schema';

describe('ReviewService', () => {
  let service: ReviewService;
  let model: Model<Review>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: getModelToken('Review'),
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
    model = module.get<Model<Review>>(getModelToken('Review'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByProductId working', async () => {
    const id = new Types.ObjectId().toHexString();
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([{ productId: id }]),
    } as any);
    const res = await service.findByProductId(id);
    expect(res[0].productId).toBe(id);
    expect.assertions(1);
  });
});
