import 'dotenv/config'
import * as process from 'process'

export const configs = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  service: process.env.SERVICE_NAME
}

export default configs
