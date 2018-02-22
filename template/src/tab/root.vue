<template lang="pug">
{{#if components.locales}}
  {{{{raw-helper}}}}
    div {{ __('tab') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless components.locales}}
    div tab
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
      console.log(__('tab'))
      {{/if}}
      {{#unless components.locales}}
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
