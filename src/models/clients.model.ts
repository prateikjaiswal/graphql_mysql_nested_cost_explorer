import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { projects } from "./projects.model";

@Table({ timestamps: false })
export class clients extends Model<clients> {
  @Column({ primaryKey: true, autoIncrement: true })
  ID: number;

  @Column
  Name: string;

  @HasMany(() => projects)
  projects: projects[];
}
