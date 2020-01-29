import { resolver } from "graphql-sequelize";
import { projects, costs } from "../../models";

export const ProjectMap = {
  clients: resolver(projects.associations.clients),
  costs: resolver(projects.associations.costs)
};
