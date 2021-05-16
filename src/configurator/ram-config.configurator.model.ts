import {Column, DataType, Model, Table} from "sequelize-typescript";


@Table({tableName: 'ram_config'})
export class RamConfig extends Model<RamConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  ram_id: number;
}
