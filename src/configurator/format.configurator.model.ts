import {Column, DataType, Model, Table} from "sequelize-typescript";

interface FormatCreationAttrs {
  name: string;
}

@Table({tableName: 'format'})
export class Format extends Model<Format, FormatCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;
}
