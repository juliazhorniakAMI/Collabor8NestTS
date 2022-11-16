import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type Coll8rDocument = Coll8r & Document;
 
@Schema({ collection: 'Coll8r' })
export class Coll8r {
  @Prop()
  coll8rType: string;
 
  @Prop()
  coll8rFullName: string;
 
  @Prop({ unique: true })
  coll8rEmail: string;

  @Prop()
  coll8rPass: string;

  @Prop()
  coll8rBackgrnd: string;

  @Prop()
  coll8rResume: string;
}


export const Coll8rSchema = SchemaFactory.createForClass(Coll8r);
