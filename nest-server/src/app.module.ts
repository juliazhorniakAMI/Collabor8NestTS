import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { Coll8rModule } from './coll8r/coll8r.module'; 
// existng code hidden for the display purpose
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://collabor8:reward@cluster0.g2otwom.mongodb.net/?retryWrites=true&w=majority'
    ),
    ProjectModule,Coll8rModule
  ]
})
export class AppModule {}