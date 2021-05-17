import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Socket} from "../configurator/socket.configurator.model";
import {CpuConfig} from "../configurator/cpu-config.configurator.model";
import {Configurator} from "../configurator/configurator.model";

interface CpuCreationAttrs {
  manufacturer: string;
  model: string;
  frequency: number;
  cores: number;
  threads: number;
  price: number;
  photo: string;
}

@Table({tableName: 'cpu'})
export class Cpu extends Model<Cpu, CpuCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.SMALLINT, allowNull: false})
  frequency: number;

  @Column({type: DataType.TINYINT, allowNull: false})
  cores: number;

  @Column({type: DataType.TINYINT, allowNull: false})
  threads: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;

  @ForeignKey(() => Socket)
  @Column({type: DataType.INTEGER})
  socket_id: number;

  @BelongsTo(() => Socket)
  socket: Socket;

  @BelongsToMany(() => Configurator, () => CpuConfig)
  cpu_config: CpuConfig[];
}
