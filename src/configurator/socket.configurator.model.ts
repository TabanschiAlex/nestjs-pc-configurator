import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Cpu} from "../components/cpu.components.model";

interface SocketCreationAttrs {
  name: string;
}

@Table({tableName: 'socket'})
export class Socket extends Model<Socket, SocketCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;

  @HasMany(() => Cpu)
  cpu: Cpu[];
}
