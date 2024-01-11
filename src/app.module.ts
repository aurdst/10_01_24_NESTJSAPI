import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulaOneModule } from './formula-one/formula-one.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/nest-crud'),
    FormulaOneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
