import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Socket} from "../configurator/socket.configurator.model";

interface RomCreationAttrs {
  manufacturer: string;
  model: string;
  type: string;
  read_speed: number;
  write_speed: number;
  price: number;
  photo: string;
}

@Table({tableName: 'rom'})
export class Rom extends Model<Rom, RomCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.STRING, defaultValue: 'SATA3'})
  type: string;

  @Column({type: DataType.SMALLINT, allowNull: false})
  read_speed: number;

  @Column({type: DataType.SMALLINT, allowNull: false})
  write_speed: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;
}