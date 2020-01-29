import { resolver } from "graphql-sequelize";
import { costs } from "../../models";

export const Query = {
  getCosts: resolver(costs)
};
