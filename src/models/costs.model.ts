import { Table, Column, Model, BelongsTo, ForeignKey, BeforeSave } from "sequelize-typescript";
import { projects } from "./projects.model";
import { cost_types } from "./cost_types.model";

@Table({ timestamps: false })
export class costs extends Model<costs> {
  @Column({ primaryKey: true, autoIncrement: true })
  ID: number;

  @Column
  Amount: number;

  @ForeignKey(() => cost_types)
  @Column
  Cost_Type_ID: number;

  @ForeignKey(() => projects)
  @Column
  Project_ID: number;

  @BelongsTo(() => projects)
  projects: projects;

  @BelongsTo(() => cost_types)
  cost_types: cost_types;
}
