<template lang="pug">
  {{{{raw-helper}}}}
    div {{ __('devtools') }}
  {{{{/raw-helper}}}}
</template>
<script>
  const __ = chrome.i18n.getMessage // eslint-disable-line no-unused-vars

  export default {
    data: () => ({
    }),
    computed: { },
    created () {
      console.log(__('options'))
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
