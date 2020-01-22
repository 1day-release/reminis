<template>
  <button
    class="button"
    :class="[setStyleClass()]"
  >
     {{ text }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: String,
      styleClass: String,
    },
    components: {
    },
    methods: {
      setStyleClass () {
        if(this.styleClass) {
          return ['is-' + this.styleClass]
        } else {
          return []
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 1.6rem;
    color: #fff;
    background-color: map-get($color-brand, "gray");
    border-radius: 25px;
    box-shadow: 0 1px 3px $shadow;

    &.is-add {
      background-color: map-get($color-brand, "blue");
    }

    &.is-delete {
      background-color: map-get($color-brand, "red");
    }
  }
</style>
