import { JSONCodec } from "nats";
import { databaseWrapper } from "./database";
import task from "./handlers/task";
import { natsWrapper } from "./lib/nats";

(async () => {
  try {
    const nats = await natsWrapper.connect();
    await databaseWrapper.connect();

    const sub = nats.subscribe("task.*");
    for await (const m of sub) {
      const sc = JSONCodec();
      switch (m.subject) {
        case "task.create":
          m.respond(sc.encode(await task.createTask(sc.decode(m.data))));
          break;
        case "task.update":
          m.respond(sc.encode(await task.updateTask(sc.decode(m.data))));
          break;
        case "task.find":
          m.respond(sc.encode(await task.findTask()));
          break;
        case "task.findOne":
          m.respond(sc.encode(await task.findOneTask(sc.decode(m.data))));
          break;
        case "task.delete":
          m.respond(sc.encode(await task.deleteTask(sc.decode(m.data))));
          break;
        default:
          console.log(
            `[admin] #${sub.getProcessed()} ignoring request for ${m.subject}`
          );
      }
    }
  } catch (error) {
    console.error(error);
  }
})();
