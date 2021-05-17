import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Configurator} from "./configurator.model";

@Injectable()
export class ConfiguratorService {
  constructor(@InjectModel(Configurator) private configuratorRepository: typeof Configurator) {
  }

  async getAllConfigs() {
    return await this.configuratorRepository.findAll();
  }

  async getConfig() {
    return await this.configuratorRepository.findAll();
  }
}
