import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schema/project-schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) { }
  async getAll() {
    return await this.projectModel.find().exec();
  }
  async create(project: Project) {
    const newProject = new this.projectModel(project);
    return await newProject.save();
  }
  async getByid(id: string) {
    return await this.projectModel.findById(id).exec();
  }
  async update(id: string, project: Project) {
    return await this.projectModel.findByIdAndUpdate(id, project, {
      new: true,
    });
  }
  async delete(id: string) {
    await this.projectModel.findByIdAndRemove(id);
  }
}
