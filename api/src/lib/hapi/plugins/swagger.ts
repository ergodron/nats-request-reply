import * as Hapi from '@hapi/hapi'
import * as HapiSwagger from 'hapi-swagger'
import * as Inert from '@hapi/inert'
import * as Vision from '@hapi/vision'

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'API Documentation',
    description: 'Api Documentation',
    version: '1.0',
  },
}

export const swaggerPlugin: Array<Hapi.ServerRegisterPluginObject<any>> = [
  { plugin: Inert },
  { plugin: Vision },
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
]