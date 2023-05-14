import '@formkit/themes/genesis'
import { close, down, fileDoc, check, circle } from '@formkit/icons'
import { DefaultConfigOptions } from '@formkit/vue'
import {
  createAutoAnimatePlugin,
  createFloatingLabelsPlugin,
} from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'

const config: DefaultConfigOptions = {
  icons: { close, down, fileDoc, check, circle, checkboxDecorator: check },
  plugins: [
    createAutoAnimatePlugin(),
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
}

export default config
