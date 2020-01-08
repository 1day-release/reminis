<template>
  <label class="label-text">
    {{ label }}
    <slot />
  </label>
</template>

<script>
  export default {
    name: 'Label',
    props: {
      label: String,
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .label-text {
    display: block;
    line-height: 1.5;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  }
</style>
