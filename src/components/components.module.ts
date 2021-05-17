import { Module } from '@nestjs/common';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';
import {Case} from "./case.components.model";
import {Cpu} from "./cpu.components.model";
import {Gpu} from "./gpu.components.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {CpuConfig} from "../configurator/cpu-config.configurator.model";
import {GpuConfig} from "../configurator/gpu-config.configurator.model";
import {Rom} from "./rom.components.model";
import {RomConfig} from "../configurator/rom-config.configurator.model";
import {Ram} from "./ram.components.model";
import {RamConfig} from "../configurator/ram-config.configurator.model";
import {Psu} from "./psu.components.model";
import {Keyboard} from "./keyboard.components.model";
import {Monitor} from "./monitor.components.model";
import {Mouse} from "./mouse.components.model";
import {Motherboard} from "./motherboard.components.model";
import {Socket} from "../configurator/socket.configurator.model";
import {Format} from "../configurator/format.configurator.model";
import {Discount} from "../configurator/discount.configurator.model";
import {Configurator} from "../configurator/configurator.model";

@Module({
  controllers: [ComponentsController],
  providers: [ComponentsService],
  imports: [
    SequelizeModule.forFeature(
      [
        Cpu, CpuConfig,
        Gpu, GpuConfig,
        Rom, RomConfig,
        Ram, RamConfig,
        Psu, Case,
        Keyboard, Monitor,
        Mouse, Motherboard,
        Socket, Format,
        Discount, Configurator
      ],
    )
  ],
  exports: [
    ComponentsService
  ]
})
export class ComponentsModule {}
