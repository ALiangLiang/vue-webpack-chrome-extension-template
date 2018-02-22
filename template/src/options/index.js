import Vue from 'vue'
import root from './root.vue'
Vue.config.productionTip = false

{{#if components.locales}}
// used in Vue rendering
Vue.prototype.__ = chrome.i18n.getMessage

{{/if}}
new Vue({ // eslint-disable-line no-new
  el: '#root',
  render: h => h(root)
})
