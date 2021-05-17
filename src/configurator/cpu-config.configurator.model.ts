import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Configurator} from "./configurator.model";
import {Cpu} from "../components/cpu.components.model";


@Table({tableName: 'cpu_config'})
export class CpuConfig extends Model<CpuConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Configurator)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @ForeignKey(() => Cpu)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  cpu_id: number;
}
