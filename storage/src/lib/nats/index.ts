import { connect, ConnectionOptions, NatsConnection } from "nats";
import { INatsWrapper } from "./types";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../../../.env" });

class NatsWrapper implements INatsWrapper {
  private connection: NatsConnection | null = null;
  private connectionOptions: ConnectionOptions = {
    servers: process.env.NATS_SERVER || "nats://nats:4222",
  };

  async getConnect(): Promise<NatsConnection> {
    if (!this.connection) {
      throw new Error("Cannot access to NATS Server");
    }
    return this.connection;
  }

  async connect(): Promise<NatsConnection> {
    try {
      this.connection = await connect(this.connectionOptions);
      console.log(`Connected to ${this.connection.getServer()}`);
      return this.connection;
    } catch (e) {
      throw new Error("Failed to connect to NATS Server");
    }
  }
}

export const natsWrapper = new NatsWrapper();
