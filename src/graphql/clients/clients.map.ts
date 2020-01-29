import { resolver } from "graphql-sequelize";
import { clients } from "../../models";

export const ClientsMap = {
  projects: resolver(clients.associations.projects)
};
