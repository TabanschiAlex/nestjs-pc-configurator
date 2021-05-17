import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {Configurator} from "./configurator.model";

interface DiscountCreationAttrs {
  name: string;
}

@Table({tableName: 'discount'})
export class Discount extends Model<Discount, DiscountCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, defaultValue: 'percent'})
  type: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @Column({type: DataType.BOOLEAN, defaultValue: true})
  is_active: boolean;

  @HasOne(() => Configurator)
  config: Configurator;
}
