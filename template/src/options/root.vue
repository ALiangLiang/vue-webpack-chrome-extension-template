<template lang="pug">
{{#if components.locales}}
  {{{{raw-helper}}}}
    div {{ __('options') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless components.locales}}
    div options
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
      console.log(__('options'))
      {{/if}}
      {{#unless components.locales}}
      console.log('options')
      {{/unless}}
    },
    mounted () { },
    methods: { }
  }
</script>
<style>
  div {
    color: blue
  }
</style>
