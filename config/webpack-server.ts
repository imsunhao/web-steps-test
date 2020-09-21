import { TGetWebpackConfig } from '@web-steps/config'

const getConfig: TGetWebpackConfig = function({ resolve }) {
  return {
    entry: {
      server: resolve('./src/index.ts')
    }
  }
}

export default getConfig
