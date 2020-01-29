import { resolver } from "graphql-sequelize";
import { costs } from "../../models";

export const CostMap = {
  projects: resolver(costs.associations.projects),
  cost_types: resolver(costs.associations.cost_types)
};
