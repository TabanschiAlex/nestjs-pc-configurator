import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {Configurator} from "../configurator/configurator.model";
import {GpuConfig} from "../configurator/gpu-config.configurator.model";

interface GpuCreationAttrs {
  manufacturer: string;
  model: string;
  core_frequency: number;
  memory_frequency: number;
  memory_type: string;
  memory_capacity: number;
  price: number;
  photo: string;
}

@Table({tableName: 'gpu'})
export class Gpu extends Model<Gpu, GpuCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.SMALLINT, allowNull: false})
  core_frequency: number;

  @Column({type: DataType.SMALLINT, allowNull: false})
  memory_frequency: number;

  @Column({type: DataType.STRING, defaultValue: 'GDDR5'})
  memory_type: string;

  @Column({type: DataType.TINYINT, allowNull: false})
  memory_capacity: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;

  @BelongsToMany(() => Configurator, () => GpuConfig)
  gpu_config: GpuConfig[];
}
