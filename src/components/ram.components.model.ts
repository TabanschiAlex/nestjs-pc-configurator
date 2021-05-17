import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {RamConfig} from "../configurator/ram-config.configurator.model";
import {Configurator} from "../configurator/configurator.model";

interface RamCreationAttrs {
  manufacturer: string;
  model: string;
  frequency: number;
  memory_capacity: number;
  memory_type: string;
  price: number;
  photo: string;
}

@Table({tableName: 'ram'})
export class Ram extends Model<Ram, RamCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.SMALLINT, allowNull: false})
  frequency: number;

  @Column({type: DataType.TINYINT, allowNull: false})
  memory_capacity: number;

  @Column({type: DataType.STRING, allowNull: false})
  memory_type: string;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;

  @BelongsToMany(() => Configurator, () => RamConfig)
  ram_config: RamConfig[];
}
