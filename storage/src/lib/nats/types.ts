import { NatsConnection } from "nats";

export interface INatsWrapper {
  getConnect(): Promise<NatsConnection>;
  connect(): Promise<NatsConnection>;
}
