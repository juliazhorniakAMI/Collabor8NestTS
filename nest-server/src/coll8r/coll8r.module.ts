import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coll8rSchema } from './schema/coll8r-schema';
import { Coll8rService } from './coll8r.service';
import { Coll8rController } from './coll8r.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Coll8r',
        schema: Coll8rSchema,
        collection: 'Coll8r',
      },
    ]),
  ],
  providers: [Coll8rService],
  controllers: [Coll8rController],
})
export class Coll8rModule {}