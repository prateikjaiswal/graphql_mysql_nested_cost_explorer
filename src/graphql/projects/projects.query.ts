import { resolver } from "graphql-sequelize";
import { projects } from "../../models";
import to from "await-to-js";

export const Query = {
  getProjects: resolver(projects)
};
