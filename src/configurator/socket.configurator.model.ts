import {Column, DataType, Model, Table} from "sequelize-typescript";

interface SocketCreationAttrs {
  name: string;
}

@Table({tableName: 'socket'})
export class Socket extends Model<Socket, SocketCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;
}
