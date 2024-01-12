import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulaOneModule } from './formula-one/formula-one.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aureliendestailleur:4851C2a172@cluster0.r5x9zmf.mongodb.net/FormulaOne?retryWrites=true&w=majority'),
    FormulaOneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
