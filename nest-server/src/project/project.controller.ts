import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './schema/project-schema';
@Controller('projects')
export class ProjectController {
    constructor(private projectService: ProjectService) { }

    @Get()
    async getAll() {
        return await this.projectService.getAll();
    }
    @Post()
    async create(@Body() project: Project) {
        return await this.projectService.create(project);
    }
    @Get('/:id')
    async getById(@Param('id') id: string) {
        return await this.projectService.getByid(id);
    }
    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() project: Project,
    ) {
        return await this.projectService.update(id, project);
    }
    @Delete('/:id')
    async delete(@Param('id') id: string) {
        await this.projectService.delete(id);
    }
}



