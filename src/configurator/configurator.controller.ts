import {Controller, Delete, Get, Post} from '@nestjs/common';
import {ConfiguratorService} from "./configurator.service";

@Controller('configurator')
export class ConfiguratorController {
  constructor(private configuratorService: ConfiguratorService) {
  }

  @Get('/all')
  getAllConfigs() {
    return this.configuratorService.getAllConfigs();
  }

  @Get('/:id')
  getConfig() {
    return this.configuratorService.getConfig();
  }

  @Post()
  addComponent() {

  }

  @Delete()
  deleteComponent() {

  }
}
