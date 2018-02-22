import Vue from 'vue'
import root from './root.vue'
Vue.config.productionTip = false

{{#if locales}}
// used in Vue rendering
Vue.prototype.__ = chrome.i18n.getMessage

{{/if}}
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(root)
})
