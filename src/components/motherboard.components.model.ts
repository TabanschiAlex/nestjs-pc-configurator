import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {Socket} from "../configurator/socket.configurator.model";
import {Format} from "../configurator/format.configurator.model";
import {Configurator} from "../configurator/configurator.model";

interface MotherboardCreationAttrs {
  manufacturer: string;
  model: string;
  chipset: string;
  ram_slots: number;
  max_ram_frequency: number;
  ram_type: string;
  cpu_numbers: number;
  gpu_numbers: number;
  rom_numbers: number;
  price: number;
  photo: string;
  socket_id: number;
  format_id: number;
}

@Table({tableName: 'motherboard'})
export class Motherboard extends Model<Motherboard, MotherboardCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.STRING, allowNull: false})
  chipset: string;

  @Column({type: DataType.TINYINT, allowNull: false})
  ram_slots: number;

  @Column({type: DataType.SMALLINT, allowNull: false})
  max_ram_frequency: number;

  @Column({type: DataType.STRING, allowNull: false})
  ram_type: string;

  @Column({type: DataType.TINYINT, allowNull: false})
  cpu_numbers: number;

  @Column({type: DataType.TINYINT, allowNull: false})
  gpu_numbers: number;

  @Column({type: DataType.TINYINT, allowNull: false})
  rom_numbers: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;

  @ForeignKey(() => Socket)
  @Column
  socket_id: number;

  @BelongsTo(() => Socket)
  socket: Socket;

  @ForeignKey(() => Format)
  @Column
  format_id: number;

  @BelongsTo(() => Format)
  format: Format;

  @HasOne(() => Configurator)
  config: Configurator;
}
