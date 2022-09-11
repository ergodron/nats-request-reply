import { databaseWrapper } from "../../database";
import { Task } from "../../entities/Task";
import { TResponse } from "../types";

export async function findOneTask(params: any): Promise<TResponse> {
  try {
    const { id } = params.data;
    const db = await databaseWrapper.getConnect();
    const taskRepository = db.getRepository(Task);

    const task = await taskRepository.findOneBy({ id, is_deleted: false });

    if (!task) {
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
