import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Coll8rService } from './coll8r.service';
import { Coll8r } from './schema/coll8r-schema';
@Controller('coll8rs')
export class Coll8rController {
    constructor(private coll8rService: Coll8rService) { }

    @Get()
    async getAll() {
        return await this.coll8rService.getAll();
    }
    @Post()
    async create(@Body() coll8r: Coll8r) {
        return await this.coll8rService.create(coll8r);
    }
    @Get('/:id')
    async getById(@Param('id') id: string) {
        return await this.coll8rService.getByid(id);
    }
    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() coll8r: Coll8r,
    ) {
        return await this.coll8rService.update(id, coll8r);
    }
    @Delete('/:id')
    async delete(@Param('id') id: string) {
        await this.coll8rService.delete(id);
    }
}



