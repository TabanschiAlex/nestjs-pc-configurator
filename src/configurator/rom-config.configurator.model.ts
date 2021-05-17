import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Configurator} from "./configurator.model";
import {Rom} from "../components/rom.components.model";


@Table({tableName: 'rom_config'})
export class RomConfig extends Model<RomConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Configurator)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @ForeignKey(() => Rom)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  rom_id: number;
}
