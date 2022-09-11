import * as Hapi from '@hapi/hapi';

export interface ITaskController {
  create(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject>;
  update(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject>;
  find(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject>;
  findOne(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject>;
  delete(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Hapi.ResponseObject>;
}