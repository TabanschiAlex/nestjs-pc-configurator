import {Column, DataType, Model, Table} from "sequelize-typescript";


@Table({tableName: 'cpu-config'})
export class CpuConfig extends Model<CpuConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  cpu_id: number;
}
