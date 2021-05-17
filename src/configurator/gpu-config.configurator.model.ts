import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Configurator} from "./configurator.model";
import {Gpu} from "../components/gpu.components.model";


@Table({tableName: 'gpu_config'})
export class GpuConfig extends Model<GpuConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Configurator)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @ForeignKey(() => Gpu)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  gpu_id: number;
}
