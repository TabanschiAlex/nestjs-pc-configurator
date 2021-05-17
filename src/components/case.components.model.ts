import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {Format} from "../configurator/format.configurator.model";
import {Configurator} from "../configurator/configurator.model";

interface CaseCreationAttrs {
  manufacturer: string;
  model: string;
  size: number;
  price: number;
  photo: string;
  format_id: number;
}

@Table({tableName: 'case'})
export class Case extends Model<Case, CaseCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Noname'})
  manufacturer: string;

  @Column({type: DataType.STRING, allowNull: false})
  model: string;

  @Column({type: DataType.STRING})
  size: number;

  @Column({type: DataType.DECIMAL(6, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, defaultValue: `${process.env.HOST || 'localhost'}/images/noImage.png`})
  photo: string;

  @ForeignKey(() => Format)
  @Column
  format_id: number;

  @BelongsTo(() => Format)
  format: Format;

  @HasOne(() => Configurator)
  config: Configurator;
}
