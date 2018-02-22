<template lang="pug">
{{#if locales}}
  {{{{raw-helper}}}}
    div {{ __('devtools') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless locales}}
    div devtools
{{/unless}}
</template>
<script>
  {{#if locales}}
  const __ = chrome.i18n.getMessage

  {{/if}}
  export default {
    data: () => ({
    }),
    computed: { },
    created () {
      {{#if locales}}
      console.log(__('devtools'))
      {{/if}}
      {{#unless locales}}
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
