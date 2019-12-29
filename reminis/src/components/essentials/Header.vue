<template>
  <header>
    <div
      class="l-header"
      :class="[setPageClass()]"
    >
      <h1 class="header-title">{{ pageTitle }}</h1>
      <IconButton
        class="header-button is-left"
        icon="plus"
      />
      <IconButton
        class="header-button"
        icon="sort-amount-up-alt"
      />
    </div>
  </header>
</template>

<script>
  import IconButton from '@/components/common/IconButton.vue'

  export default {
    name: 'Header',
    components: {
      IconButton,
    },
    props: {
      pageTitle: String,
      pageClass: String,
    },
    methods: {
      setPageClass () {
        if(this.pageClass) {
          return ['is-' + this.pageClass]
        } else {
          return []
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .l-header {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: $header-height;
    padding-top: 0;
    box-shadow: 0 3px 6px rgba(#000, 0.3);

    &.is-future {
      color: #fff;
      background-color: map-get($color-brand, "future");
    }

    &.is-reminis {
      color: #fff;
      background-color: map-get($color-brand, "reminis");
    }
  }

  .header {
    &-title {
      font-size: 1.8rem;
    }

    &-button {
      $size: 30px;

      flex: 0 0 auto;
      width: $size;
      height: $size;
      margin: 0 15px;
      background-color: transparent;

      &.is-left {
        order: -1;
      }
    }
  }
</style>
