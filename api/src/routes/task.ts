import { ServerRoute } from "@hapi/hapi";
import Joi from "joi";
import { TaskController } from "../controllers/Task";

const taskController = new TaskController();
export const taskRoute: ServerRoute[] = [
  {
    method: "POST",
    path: "/notes",
    options: {
      handler: taskController.create,
      description: "Создание заметки",
      notes: "Создает заметку",
      tags: ["api", "task"],
      validate: {
        payload: Joi.object({
          title: Joi.string().required().description("Заголовок заметки"),
          text: Joi.string().description("Текст заметки"),
        }),
      },
    },
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    options: {
      handler: taskController.update,
      description: "Редактирование заметки",
      notes: "Редактирует заметку по ID",
      tags: ["api", "task"],
      validate: {
        params: Joi.object({
          id: Joi.number().description("ID заметки"),
        }),
        payload: Joi.object({
          title: Joi.string().required().description("Заголовок заметки"),
          text: Joi.string().description("Текст заметки"),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    options: {
      handler: taskController.find,
      description: "Получение списка заметок",
      notes: "Получает весь список заметок",
      tags: ["api", "task"],
    },
  },
  {
    method: "GET",
    path: "/notes/{id}",
    options: {
      handler: taskController.findOne,
      description: "Получение заметки",
      notes: "Получает заметку по ID",
      tags: ["api", "task"],
      validate: {
        params: Joi.object({
          id: Joi.number().description("ID заметки"),
        }),
      },
    },
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    options: {
      handler: taskController.delete,
      description: "Удаление заметки",
      notes: "Удаляет заметку по ID",
      tags: ["api", "task"],
      validate: {
        params: Joi.object({
          id: Joi.number().description("ID заметки"),
        }),
      },
    },
  },
];
