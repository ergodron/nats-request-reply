import { databaseWrapper } from "../../database";
import { Task } from "../../entities/Task";
import { TResponse } from "../types";

export async function findTask(): Promise<TResponse> {
  try {
    const db = await databaseWrapper.getConnect();
    const taskRepository = db.getRepository(Task);

    const task = await taskRepository.findBy({ is_deleted: false });

    return {
      status: "Success",
      data: task,
    };
  } catch (error) {
    return {
      status: "Error",
      data: null,
      error: {
        message: error instanceof Error ? error.message : (error as string),
        code: 400,
      },
    };
  }
}
