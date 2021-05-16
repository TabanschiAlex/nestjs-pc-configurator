import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Socket} from "../configurator/socket.configurator.model";

interface PsuCreationAttrs {
  manufacturer: string;
  model: string;
  power: number;
  price: number;
  photo: string;
}

@Table({tableName: 'psu'})
export class Psu extends Model<Psu, PsuCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.TINYINT, allowNull: false})
  power: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;
}
