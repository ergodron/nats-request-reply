import * as Hapi from '@hapi/hapi';
import { natsRequest } from '../utils/natsRequest';
import { ITaskController } from './types';

export class TaskController implements ITaskController {
  async create(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
    return await natsRequest('task.create', { data: request.payload }, h);
  }

  async update(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
    return await natsRequest('task.update', { data: { ...request.payload as object, ...request.params } }, h);
  }

  async find(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
    return await natsRequest('task.find', { data: {} }, h);
  }

  async findOne(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
    return await natsRequest('task.findOne', { data: request.params }, h);
  }

  async delete(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject> {
    return await natsRequest('task.delete', { data: request.params }, h);
  }
}