import {Module} from '@nestjs/common';
import {ConfiguratorController} from './configurator.controller';
import {ConfiguratorService} from './configurator.service';
import {ComponentsModule} from "../components/components.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {Cpu} from "../components/cpu.components.model";
import {CpuConfig} from "./cpu-config.configurator.model";
import {Gpu} from "../components/gpu.components.model";
import {GpuConfig} from "./gpu-config.configurator.model";
import {Rom} from "../components/rom.components.model";
import {RomConfig} from "./rom-config.configurator.model";
import {Ram} from "../components/ram.components.model";
import {RamConfig} from "./ram-config.configurator.model";
import {Psu} from "../components/psu.components.model";
import {Case} from "../components/case.components.model";
import {Keyboard} from "../components/keyboard.components.model";
import {Monitor} from "../components/monitor.components.model";
import {Mouse} from "../components/mouse.components.model";
import {Motherboard} from "../components/motherboard.components.model";
import {Socket} from "./socket.configurator.model";
import {Format} from "./format.configurator.model";
import {Discount} from "./discount.configurator.model";
import {Configurator} from "./configurator.model";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [ConfiguratorController],
  providers: [ConfiguratorService],
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
      ]
    ),
    ComponentsModule,
    AuthModule
  ]
})
export class ConfiguratorModule {
}
