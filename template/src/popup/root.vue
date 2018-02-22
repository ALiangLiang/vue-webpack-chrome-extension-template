<template lang="pug">
{{#if components.locales}}
  {{{{raw-helper}}}}
    div
      el-button(type="primary" @click="tab") {{ __('popup') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless components.locales}}
    div
      el-button(type="primary" @click="tab") New tab
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
      console.log(__('popup'))
      {{/if}}
      {{#unless components.locales}}
      console.log('New tab')
      {{/unless}}
    },
    mounted () { },
    methods: {
      tab () {
        chrome.tabs.create({ url: 'pages/app.html' })
      }
    }
  }
</script>
<style lang="scss">
  div {
    color: blue
  }
</style>
