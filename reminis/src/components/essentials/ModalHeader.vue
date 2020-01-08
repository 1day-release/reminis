<template>
  <header>
    <div
      class="l-modal-header"
    >
      <h1 class="header-title">{{ pageTitle }}</h1>
      <IconButton
        class="header-button is-close"
        icon="times"
      />
    </div>
  </header>
</template>

<script>
  import IconButton from '@/components/common/IconButton.vue'

  export default {
    name: 'ModalHeader',
    components: {
      IconButton,
    },
    props: {
      pageTitle: String,
      pageClass: String,
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .l-modal-header {
    position: fixed;
    z-index: 70;
    top: 0;
    left: 0;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $header-height;
    background-color: #fff;
    box-shadow: 0 3px 6px $shadow;
  }

  .header {
    &-title {
      font-size: 1.8rem;
    }

    &-button {
      $size: 30px;

      position: absolute;
      flex: 0 0 auto;
      width: $size;
      height: $size;
      margin: 0 15px;
      background-color: transparent;

      &.is-close {
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        margin: auto 0;
      }
    }
  }
</style>
