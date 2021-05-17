import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {RolesModule} from './roles/roles.module';
import {AuthModule} from './auth/auth.module';
import {User} from "./users/users.model";
import {Role} from "./roles/roles.model";
import { ConfiguratorModule } from './configurator/configurator.module';
import { ComponentsModule } from './components/components.module';
import {Cpu} from "./components/cpu.components.model";
import {CpuConfig} from "./configurator/cpu-config.configurator.model";
import {Gpu} from "./components/gpu.components.model";
import {GpuConfig} from "./configurator/gpu-config.configurator.model";
import {Rom} from "./components/rom.components.model";
import {RomConfig} from "./configurator/rom-config.configurator.model";
import {RamConfig} from "./configurator/ram-config.configurator.model";
import {Ram} from "./components/ram.components.model";
import {Psu} from "./components/psu.components.model";
import {Case} from "./components/case.components.model";
import {Keyboard} from "./components/keyboard.components.model";
import {Monitor} from "./components/monitor.components.model";
import {Motherboard} from "./components/motherboard.components.model";
import {Mouse} from "./components/mouse.components.model";
import {Socket} from "./configurator/socket.configurator.model";
import {Format} from "./configurator/format.configurator.model";
import {Discount} from "./configurator/discount.configurator.model";
import {Configurator} from "./configurator/configurator.model";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.SQL_HOST,
      port: Number(process.env.SQL_PORT),
      username: process.env.SQL_NAME,
      password: process.env.SQL_PASS,
      database: process.env.SQL_DB,
      models: [
        User, Role,
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
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ConfiguratorModule,
    ComponentsModule
  ]
})
export class AppModule {
}
