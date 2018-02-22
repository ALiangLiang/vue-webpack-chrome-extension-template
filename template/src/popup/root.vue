<template lang="pug">
  {{{{raw-helper}}}}
    div
      el-button(type="primary" @click="tab") {{ __('popup') }}
  {{{{/raw-helper}}}}
</template>
<script>
  const __ = chrome.i18n.getMessage // eslint-disable-line no-unused-vars

  export default {
    data: () => ({
    }),
    computed: { },
    created () {
      console.log(__('popup'))
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
