import { Table, Column, Model, HasMany, BelongsTo, ForeignKey, BeforeSave } from "sequelize-typescript";
import { clients } from "./clients.model";
import { costs } from "./costs.model";

@Table({ timestamps: false })
export class projects extends Model<projects> {
  @Column({ primaryKey: true, autoIncrement: true })
  ID: number;

  @Column
  Title: string;

  @ForeignKey(() => clients)
  @Column
  Client_ID: number;

  @BelongsTo(() => clients)
  clients: clients;

  @HasMany(() => costs)
  costs: costs[];
}
