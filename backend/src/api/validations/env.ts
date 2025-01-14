import { Configs } from "@/types/config"

const invalid: string[] = []

export const validateEnvConfigs = async (configs: Configs) => {
  Object.keys(configs).forEach((config) => {
    const validConfigItem = !!configs[config]
    if (typeof configs[config] === "object" && configs[config] !== null) {
      validateEnvConfigs(configs[config] as Configs)
    }
    if (!validConfigItem) {
      invalid.push(config)
    }
  })
  return { invalid: invalid.length > 0, errors: invalid }
}
