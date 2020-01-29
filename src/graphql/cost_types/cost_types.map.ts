import { resolver } from "graphql-sequelize";
import { cost_types } from "../../models";

export const CostTypeMap = {
  costs: resolver(cost_types.associations.costs),
  costType: resolver(async (root, args, context, info) => {
    //console.log("root- " + root.ID);
    //let b = await cost_types.findByPk(root.ID);
    return cost_types;
  })
};
