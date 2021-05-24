import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {ConfiguratorService} from "./configurator.service";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";
import {Configurator} from "./configurator.model";
import {Request} from "express";

@UseGuards(JwtAuthGuard)
@Controller('configurator')
export class ConfiguratorController {
  constructor(private configuratorService: ConfiguratorService) {
  }

  @Get()
  getAllConfigs(@Req() req: Request): Promise<Configurator[]> {
    return this.configuratorService.getConfigs(req);
  }

  @Get('/:id')
  getConfigById(@Param('id') id): Promise<Configurator> {
    return this.configuratorService.getConfigById(id);
  }

  @Post()
  createConfig(@Req() req: Request): Promise<Configurator[]> {
    return this.configuratorService.createConfig(req);
  }

  @Post('add')
  addComponent(@Body() body) {
    return this.configuratorService.addComponent(body);
  }

  @Delete()
  deleteComponent() {

  }
}
