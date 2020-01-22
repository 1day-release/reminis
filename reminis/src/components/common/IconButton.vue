<template>
  <router-link
    v-if = "path && typeof path === 'object'"
    :to = "path"
    class="button"
  >
    <fa-icon :icon="icon" />
  </router-link>

  <a
    v-else-if = "path"
    :href="path"
    class="button"
  >
    <fa-icon :icon="icon" />
  </a>

  <button
    v-else
    class="button"
  >
    <fa-icon :icon="icon" />
  </button>
</template>

<script>
  export default {
    name: 'IconButton',
    props: {
      path: [String, Object],
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
    color: inherit;
  }
</style>
