import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { sequelize } from "./models";
import { ENV } from "./config";

import { resolver as resolvers, schema } from "./graphql";
import { createContext, EXPECTED_OPTIONS_KEY } from "dataloader-sequelize";
import to from "await-to-js";

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground: true,
  context: () => {
    return {
      [EXPECTED_OPTIONS_KEY]: createContext(sequelize)
    };
  }
});
server.applyMiddleware({ app });

app.listen({ port: ENV.PORT }, async () => {
  console.log(`🚀 Server ready at http://localhost:${ENV.PORT}${server.graphqlPath} 🚀`);
  let err;
  [err] = await to(sequelize.sync());
  if (err) {
    console.error("Error: Cannot connect to database");
  } else {
    console.log("🚀 Connected to database 🚀");
  }
});
