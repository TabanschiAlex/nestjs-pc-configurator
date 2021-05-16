import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/roles.model";

interface UserCreationAttrs {
  email: string;
  name: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING})
  password: string;


  @ForeignKey(() => Role)
  @Column({defaultValue: 2})
  role_id: number;

  @BelongsTo(() => Role)
  role: Role;
}
