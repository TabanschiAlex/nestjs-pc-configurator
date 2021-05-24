import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Configurator} from "./configurator.model";
import {Motherboard} from "../components/motherboard.components.model";
import {Psu} from "../components/psu.components.model";
import {Case} from "../components/case.components.model";
import {Monitor} from "../components/monitor.components.model";
import {Keyboard} from "../components/keyboard.components.model";
import {Mouse} from "../components/mouse.components.model";
import {Cpu} from "../components/cpu.components.model";
import {Rom} from "../components/rom.components.model";
import {Ram} from "../components/ram.components.model";
import {Gpu} from "../components/gpu.components.model";

@Injectable()
export class ConfiguratorService {
  constructor(@InjectModel(Configurator) private configuratorRepository: typeof Configurator) {}

  async getConfigs(req): Promise<Configurator[]> {
    return await this.configuratorRepository.findAll(
      {
        where: {
          user_id: req.user.id
        },
        attributes: ['id']
      });
  }

  async getConfigById(id): Promise<Configurator> {
    return await this.configuratorRepository.findOne(
      {
        where: {
          id: id
        },
        attributes: ['id', 'user_id', 'total_price', 'discount_price'],
        include: [
          Cpu, Gpu, Rom,
          Ram, Motherboard,
          Psu, Case, Monitor,
          Keyboard, Mouse
        ]
      });
  }

  async createConfig(req): Promise<Configurator[]> {
    await this.configuratorRepository.create({user_id: req.user.id});
    return await this.getConfigs(req);
  }

  addComponent(body) {
    return this.configuratorRepository.update(body.component, body.id);
  }
}
