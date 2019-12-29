<template>
  <button class="button">
    <fa-icon :icon="icon" />
  </button>
</template>

<script>
  export default {
    name: 'IconButton',
    props: {
      icon: String,
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 2.2rem;
  }
</style>
