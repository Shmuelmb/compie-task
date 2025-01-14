import "./api/lib/module-alias-config"
import { configs } from "./config/vars"
import { validateEnvConfigs } from "./api/validations/env"
import app from "./config/express"
import * as process from "process"

const { service, port, env } = configs

;(async () => {
  try {
    const status = await validateEnvConfigs(configs)
    if (status.invalid) {
      console.log("service is missing environment variables:", status.errors)
      process.exit(1)
    }
    app.listen(port, () => {
      console.log(`service ${service} started on port ${port} (${env})`)
    })
  } catch (err) {
    console.log(`service ends with error : ${err}`)
    process.exit(0)
  }
})()
