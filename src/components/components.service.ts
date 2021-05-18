import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Cpu} from "./cpu.components.model";
import {Motherboard} from "./motherboard.components.model";
import {Gpu} from "./gpu.components.model";
import {Ram} from "./ram.components.model";
import {Rom} from "./rom.components.model";
import {Psu} from "./psu.components.model";
import {Case} from "./case.components.model";
import {Keyboard} from "./keyboard.components.model";
import {Monitor} from "./monitor.components.model";
import {Mouse} from "./mouse.components.model";


@Injectable()
export class ComponentsService {
  constructor(@InjectModel(Cpu) private cpuRepository: typeof Cpu,
              @InjectModel(Motherboard) private motherboardRepository: typeof Motherboard,
              @InjectModel(Gpu) private gpuRepository: typeof Gpu,
              @InjectModel(Ram) private ramRepository: typeof Ram,
              @InjectModel(Rom) private romRepository: typeof Rom,
              @InjectModel(Psu) private psuRepository: typeof Psu,
              @InjectModel(Case) private caseRepository: typeof Case,
              @InjectModel(Keyboard) private keyboardRepository: typeof Keyboard,
              @InjectModel(Monitor) private monitorRepository: typeof Monitor,
              @InjectModel(Mouse) private mouseRepository: typeof Mouse) {}

  async getComponentList(component): Promise<any> {
    switch (component) {
      case 'cpu': return this.cpuRepository.findAll();
      case 'motherboard': return this.motherboardRepository.findAll();
      case 'gpu': return this.gpuRepository.findAll();
      case 'ram': return this.ramRepository.findAll();
      case 'rom': return this.romRepository.findAll();
      case 'psu': return this.psuRepository.findAll();
      case 'case': return this.caseRepository.findAll();
      case 'keyboard': return this.keyboardRepository.findAll();
      case 'monitor': return this.monitorRepository.findAll();
      case 'mouse': return this.mouseRepository.findAll();
      default: throw new HttpException({message: 'Component not found'}, HttpStatus.NOT_FOUND);
    }
  }
}
