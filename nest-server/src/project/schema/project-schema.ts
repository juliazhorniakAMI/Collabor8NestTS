import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type ProjectDocument = Project & Document;
 
@Schema({ collection: 'Project' })
export class Project {
  @Prop()
  title: string;
 
  @Prop()
  description: string;
 
  @Prop()
  published: Boolean;
}
 
export const ProjectSchema = SchemaFactory.createForClass(Project);