import {Column, DataType, Model, Table} from "sequelize-typescript";


@Table({tableName: 'gpu-config'})
export class GpuConfig extends Model<GpuConfig> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  config_id: number;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  gpu_id: number;
}
