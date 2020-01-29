import { Table, Column, Model, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { costs } from "./costs.model";

@Table({ timestamps: false })
export class cost_types extends Model<cost_types> {
  @Column({ primaryKey: true, autoIncrement: true })
  ID: number;

  @Column
  Name: string;

  @HasMany(() => costs)
  costs: costs[];

  @ForeignKey(() => cost_types)
  @Column
  Parent_Cost_Type_ID: number;

  @BelongsTo(() => cost_types)
  costType: cost_types;
}
