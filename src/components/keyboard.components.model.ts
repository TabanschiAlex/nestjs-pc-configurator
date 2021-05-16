import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Socket} from "../configurator/socket.configurator.model";
import {Format} from "../configurator/format.configurator.model";

interface KeyboardCreationAttrs {
  manufacturer: string;
  model: string;
  has_russian_keys: boolean;
  has_numpad: boolean;
  connection_type: string;
  price: number;
  photo: string;
}

@Table({tableName: 'keyboard'})
export class Keyboard extends Model<Keyboard, KeyboardCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.BOOLEAN, defaultValue: true})
  has_russian_keys: boolean;

  @Column({type: DataType.BOOLEAN, defaultValue: true})
  has_numpad: boolean;

  @Column({type: DataType.STRING, defaultValue: 'USB'})
  connection_type: string;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;
}
