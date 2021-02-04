import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/users.model';

@Module({
  imports: [
    ConfigModule.forRoot(
      ({
        envFilePath: '.env',
        isGlobal: true
      })
    ),
    MongooseModule.forRoot(process.env.DEV_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }),
    MongooseModule.forFeature([
      {
        name: User.name, schema: UserSchema
      },])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
