<template lang="pug">
{{#if locales}}
  {{{{raw-helper}}}}
    div
      el-button(type="primary" @click="tab") {{ __('popup') }}
  {{{{/raw-helper}}}}
{{/if}}
{{#unless locales}}
    div
      el-button(type="primary" @click="tab") New tab
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
      console.log(__('popup'))
      {{/if}}
      {{#unless locales}}
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
