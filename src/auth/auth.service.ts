import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './schemas/auth.schema';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}

  async create({ email, password }: AuthDto): Promise<Auth> {
    const createdUser = new this.authModel({ email, passwordHash: password });
    console.log(createdUser);
    return createdUser.save();
  }

  async findOne(authDto: AuthDto): Promise<boolean> {
    const user = await this.authModel.findOne({ email: authDto.email }).exec();
    if (!user) {
      return false;
    } else {
      console.log(user);
      return true;
    }
  }
}
