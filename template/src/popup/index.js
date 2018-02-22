import Vue from 'vue'
import root from './root.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// used in Vue rendering
Vue.prototype.__ = chrome.i18n.getMessage

Vue.use(ElementUI)

new Vue({ // eslint-disable-line no-new
  el: '#root',
  render: h => h(root)
})
