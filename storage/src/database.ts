import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

interface IDatabaseWrapper {
  getConnect(): Promise<DataSource>;
  connect(): Promise<DataSource>;
  disconnect(): Promise<void>;
}

class DatabaseWrapper implements IDatabaseWrapper {
  private connection: DataSource | null = null;

  async getConnect(): Promise<DataSource> {
    if (!this.connection) {
      throw new Error("Cannot access to database");
    }
    return this.connection;
  }

  async connect(): Promise<DataSource> {
    try {
      this.connection = await new DataSource({
        type: "postgres",
        host: process.env.DB_HOST || "postgres",
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
        database: process.env.DB_NAME || "postgres",
        synchronize: true,
        logging: true,
        entities: [__dirname + "/entities/**/*.ts"],
      }).initialize();
      console.log(
        `Connected to Postgres ${process.env.DB_HOST}:${process.env.DB_PORT}`
      );
      return this.connection;
    } catch (err) {
      throw new Error("Failed to connect to Postgres Server");
    }
  }

  async disconnect(): Promise<void> {
    await this.connection?.destroy();
    console.log(`Postgres disconnect`);
  }
}

export const databaseWrapper = new DatabaseWrapper();
