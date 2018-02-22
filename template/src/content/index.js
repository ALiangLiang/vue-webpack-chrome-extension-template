{{#if locales}}
const __ = chrome.i18n.getMessage
console.log(__('content'))
{{/if}}
{{#unless locales}}
console.log('content-script!')
{{/unless}}
