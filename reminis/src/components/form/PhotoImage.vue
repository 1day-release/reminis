<template>
  <div class="photo-image">
    <IconButton icon="camera" />
  </div>
</template>

<script>
  import IconButton from '@/components/common/IconButton.vue'

  export default {
    name: 'PhotoImage',
    components: {
      IconButton,
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .photo-image {
    position: relative;
    width: 100%;
    background-color: #ccc;
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    box-shadow: 0 3px 6px $shadow;

    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 100px / 330px * 100%;
      user-select: none;
    }
  }

  .button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    color: #fff;
    background-color: rgba(#000, 0.5);
    border-radius: 50%;
  }
</style>
