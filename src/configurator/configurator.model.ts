import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {CpuConfig} from "./cpu-config.configurator.model";
import {Cpu} from "../components/cpu.components.model";
import {GpuConfig} from "./gpu-config.configurator.model";
import {Gpu} from "../components/gpu.components.model";
import {Rom} from "../components/rom.components.model";
import {RomConfig} from "./rom-config.configurator.model";
import {Ram} from "../components/ram.components.model";
import {RamConfig} from "./ram-config.configurator.model";
import {Motherboard} from "../components/motherboard.components.model";
import {Psu} from "../components/psu.components.model";
import {Case} from "../components/case.components.model";
import {Monitor} from "../components/monitor.components.model";
import {Keyboard} from "../components/keyboard.components.model";
import {Mouse} from "../components/mouse.components.model";
import {Discount} from "./discount.configurator.model";

interface ConfiguratorCreationAttrs {
  user_id: number;
}

@Table({tableName: 'config'})
export class Configurator extends Model<Configurator, ConfiguratorCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => CpuConfig)
  @Column({type: DataType.INTEGER, unique: true})
  cpu_config_id: number;

  @ForeignKey(() => Motherboard)
  @Column({type: DataType.INTEGER})
  motherboard_id: number;

  @ForeignKey(() => GpuConfig)
  @Column({type: DataType.INTEGER, unique: true})
  gpu_config_id: number;

  @ForeignKey(() => RomConfig)
  @Column({type: DataType.INTEGER, unique: true})
  rom_config_id: number

  @ForeignKey(() => RamConfig)
  @Column({type: DataType.INTEGER, unique: true})
  ram_config_id: number;

  @ForeignKey(() => Psu)
  @Column({type: DataType.INTEGER})
  psu_id: number;

  @ForeignKey(() => Case)
  @Column({type: DataType.INTEGER})
  case_id: number;

  @ForeignKey(() => Monitor)
  @Column({type: DataType.INTEGER})
  monitor_id: number;

  @ForeignKey(() => Keyboard)
  @Column({type: DataType.INTEGER})
  keyboard_id: number;

  @ForeignKey(() => Mouse)
  @Column({type: DataType.INTEGER})
  mouse_id: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  user_id: number;

  @ForeignKey(() => Discount)
  @Column({type: DataType.INTEGER})
  discount_id: number;

  @Column({type: DataType.DECIMAL(6, 2), defaultValue: 0})
  total_price: number;

  @Column({type: DataType.DECIMAL(6, 2), defaultValue: 0})
  discount_price: number;

  // Relations

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Motherboard)
  motherboard: Motherboard;

  @BelongsToMany(() => Cpu, () => CpuConfig)
  cpu_config: Cpu[];

  @BelongsToMany(() => Gpu, () => GpuConfig)
  gpu_config: Gpu[];

  @BelongsToMany(() => Rom, () => RomConfig)
  rom_config: Rom[];

  @BelongsToMany(() => Ram, () => RamConfig)
  ram_config: Ram[];

  @BelongsTo(() => Case)
  case: Case;

  @BelongsTo(() => Psu)
  psu: Psu;

  @BelongsTo(() => Monitor)
  monitor: Monitor;

  @BelongsTo(() => Keyboard)
  keyboard: Keyboard;

  @BelongsTo(() => Mouse)
  mouse: Mouse;
}
