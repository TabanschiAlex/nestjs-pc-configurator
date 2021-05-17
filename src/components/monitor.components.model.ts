import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {Configurator} from "../configurator/configurator.model";

interface MonitorCreationAttrs {
  manufacturer: string;
  model: string;
  resolution: string;
  diagonal: number;
  price: number;
  photo: string;
}

@Table({tableName: 'monitor'})
export class Monitor extends Model<Monitor, MonitorCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.STRING, allowNull: false})
  resolution: string;

  @Column({type: DataType.TINYINT, allowNull: false})
  diagonal: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;

  @HasOne(() => Configurator)
  config: Configurator;
}
