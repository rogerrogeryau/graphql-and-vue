import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.amber.base,
    secondary: colors.teal.lighten2,
    accent: colors.lightBlue.lighten2,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
})
