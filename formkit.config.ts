import "@formkit/themes/genesis"
import { close, down, fileDoc, check, circle } from "@formkit/icons"
import { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  icons: { close, down, fileDoc, check, circle, checkboxDecorator: check }
}

export default config
