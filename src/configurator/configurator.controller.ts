import {Body, Controller, Delete, Get, Post, Req, UseGuards} from '@nestjs/common';
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

  @Post()
  createConfig(@Req() req: Request): Promise<Configurator[]> {
    return this.configuratorService.createConfig(req);
  }

  @Post()
  addComponent(@Body() a) {
    return this.configuratorService.addComponent();
  }

  @Delete()
  deleteComponent() {

  }
}
