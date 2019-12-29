<template>
  <main>
    <slot />
  </main>
</template>

<script>
  export default {
    name: 'Main',
    props: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  main {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    max-height: calc(100% - #{$header-height + $footer-height});
    margin: $header-height 0 $footer-height;
  }
</style>s
