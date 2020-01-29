import { resolver } from "graphql-sequelize";
import { cost_types } from "../../models";

export const Query = {
  getCostTypes: resolver(cost_types)
};
