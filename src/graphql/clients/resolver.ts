import { Query } from "./clients.query";
import { ClientsMap } from "./clients.map";

export const resolver = {
  Query: Query,
  Client: ClientsMap
};
