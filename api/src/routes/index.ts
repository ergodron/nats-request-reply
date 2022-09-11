import { ServerRoute } from '@hapi/hapi';
import { taskRoute } from './task';

export default [
  ...taskRoute
] as ServerRoute[];