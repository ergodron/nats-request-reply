import { databaseWrapper } from "../../database";
import { Task } from "../../entities/Task";
import { TResponse } from "../types";

export async function updateTask(params: any): Promise<TResponse> {
  try {
    const { id, title, text } = params.data;
    const db = await databaseWrapper.getConnect();
    const taskRepository = db.getRepository(Task);

    const task = await taskRepository.update(
      { id, is_deleted: false },
      {
        title,
        text,
      }
    );

    if (!task.affected) {
      return {
        status: "Error",
        data: null,
        error: {
          message: "Entity not found",
          code: 404,
        },
      };
    }

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
