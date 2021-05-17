import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Configurator} from "./configurator.model";
import {Ram} from "../components/ram.components.model";


@Table({tableName: 'ram_config'})
export class RamConfig extends Model<RamConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Configurator)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @ForeignKey(() => Ram)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  ram_id: number;
}
