import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Socket} from "../configurator/socket.configurator.model";
import {Format} from "../configurator/format.configurator.model";

interface MouseCreationAttrs {
  manufacturer: string;
  model: string;
  type: string;
  cpi: number;
  price: number;
  photo: string;
}

@Table({tableName: 'monitor'})
export class Mouse extends Model<Mouse, MouseCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.STRING, defaultValue: 'office'})
  type: string;

  @Column({type: DataType.SMALLINT, allowNull: false})
  cpi: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;
}
