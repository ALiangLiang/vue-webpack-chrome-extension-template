<template lang="pug">
{{#if components.locales}}
  {{{{raw-helper}}}}
    div {{ __('devtools') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless components.locales}}
    div devtools
{{/unless}}
</template>
<script>
  {{#if components.locales}}
  const __ = chrome.i18n.getMessage

  {{/if}}
  export default {
    data: () => ({
    }),
    computed: { },
    created () {
      {{#if components.locales}}
      console.log(__('devtools'))
      {{/if}}
      {{#unless components.locales}}
      console.log('devtools')
      {{/unless}}
    },
    mounted () { },
    methods: { }
  }
</script>
<style lang="scss">
  div {
    color: blue
  }
</style>
