<template lang="pug">
{{#if locales}}
  {{{{raw-helper}}}}
    div {{ __('options') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless locales}}
    div options
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
      console.log(__('options'))
      {{/if}}
      {{#unless locales}}
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
