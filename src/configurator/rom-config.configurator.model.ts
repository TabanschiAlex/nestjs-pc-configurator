import {Column, DataType, Model, Table} from "sequelize-typescript";


@Table({tableName: 'rom_config'})
export class RomConfig extends Model<RomConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  rom_id: number;
}
