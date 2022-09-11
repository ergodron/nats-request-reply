import { Server } from "@hapi/hapi";
import * as Hapi from "@hapi/hapi";
import plugins from "./lib/hapi/plugins";
import * as dotenv from "dotenv";
import { natsWrapper } from "./lib/nats";
import routes from "./routes";

dotenv.config({ path: "../../.env" });

export const server: Server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || "0.0.0.0",
  routes: {
    cors: true,
  },
});

export const init = async function (): Promise<Server> {
  await server.register(plugins);
  server.route(routes);

  await server.start().catch((err) => console.log(err));
  await natsWrapper.connect();
  console.log("Server running on %s", server.info.uri);

  return server;
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
