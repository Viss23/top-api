import { Test, TestingModule } from '@nestjs/testing';
import { HttpServer, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { disconnect } from 'mongoose';
import {
  USER_NOT_FOUND_ERROR,
  WRONG_PASSWORD_ERROR,
} from '../src/auth/auth.constants';
import { Server } from 'http';

const testDto: AuthDto = {
  email: 'a@ab.com',
  password: '123456',
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let server: HttpServer;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
  });

  afterEach(async () => {
    await app.close();
    // Close the server instance after each test
    server.close();
  });

  it('/auth/login - user not found', async () => {
    await request(server)
      .post('/auth/login')
      .send({
        ...testDto,
        email: 'wrong@email.com',
      })
      .expect(401, {
        statusCode: 401,
        message: USER_NOT_FOUND_ERROR,
        error: 'Unauthorized',
      });
  });

  it('/auth/login - success', async () => {
    await request(server)
      .post('/auth/login')
      .send(testDto)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.access_token).toBeDefined();
      });
  });

  it('/auth/login - wrong password', async () => {
    await request(server)
      .post('/auth/login')
      .send({
        ...testDto,
        password: 'wrongPassword',
      })
      .expect(401, {
        statusCode: 401,
        message: WRONG_PASSWORD_ERROR,
        error: 'Unauthorized',
      });
  });

  afterAll(() => {
    disconnect();
  });
});
