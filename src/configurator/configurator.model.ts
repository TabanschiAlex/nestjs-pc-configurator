import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";


@Table({tableName: 'config'})
export class Configurator extends Model<Configurator> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column
  motherboard_id: number;

  @BelongsTo(() => User)
  motherboard: User;
}
