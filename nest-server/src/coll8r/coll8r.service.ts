import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coll8r, Coll8rDocument } from './schema/coll8r-schema';

@Injectable()
export class Coll8rService {
  constructor(
    @InjectModel(Coll8r.name) private coll8rModel: Model<Coll8rDocument>,
  ) { }
  async getAll() {
    return await this.coll8rModel.find().exec();
  }
  async create(coll8r: Coll8r) {
    const newColl8r = new this.coll8rModel(coll8r);
    return await newColl8r.save();
  }
  async getByid(id: string) {
    return await this.coll8rModel.findById(id).exec();
  }
  async update(id: string, coll8r: Coll8r) {
    return await this.coll8rModel.findByIdAndUpdate(id, coll8r, {
      new: true,
    });
  }
  async delete(id: string) {
    await this.coll8rModel.findByIdAndRemove(id);
  }
}
