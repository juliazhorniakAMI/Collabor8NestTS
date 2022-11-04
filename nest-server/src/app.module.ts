import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
// existng code hidden for the display purpose
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://collabor8:reward@cluster0.g2otwom.mongodb.net/?retryWrites=true&w=majority'
    ),
    ProjectModule,
  ]
})
export class AppModule {}