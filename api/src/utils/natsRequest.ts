import { JSONCodec } from "nats";
import * as Hapi from "@hapi/hapi";
import { natsWrapper } from "../lib/nats";

export type TResponse = {
  status: string;
  data: any;
  error?: {
    code: number;
    message: string;
  };
};

export async function natsRequest(
  subject: string,
  data: object,
  h: Hapi.ResponseToolkit
): Promise<Hapi.ResponseObject> {
  try {
    const nats = await natsWrapper.getConnect();
    const sc = JSONCodec();
    const m = await nats.request(subject, sc.encode(data));

    const decodeData: TResponse = sc.decode(m.data) as TResponse;
    return decodeData.status === "Error" && decodeData.error
      ? h.response(decodeData).code(decodeData.error.code)
      : h.response(decodeData);
  } catch (error) {
    return h
      .response(error instanceof Error ? error.message : (error as string))
      .code(400);
  }
}
