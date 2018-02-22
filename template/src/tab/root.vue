<template lang="pug">
{{#if locales}}
  {{{{raw-helper}}}}
    div {{ __('tab') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless locales}}
    div tab
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
      console.log(__('tab'))
      {{/if}}
      {{#unless locales}}
      console.log('tab')
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
