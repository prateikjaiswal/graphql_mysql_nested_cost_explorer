import { resolver } from "graphql-sequelize";
import { clients } from "../../models";

export const Query = {
  getClients: resolver(clients)
};
