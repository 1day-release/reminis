<template>
  <div class="l-container">
    <Main>
    </Main>
  </div>
</template>

<script>
  import Main from '@/components/essentials/Main.vue'

  export default {
    name: 'About',
    components: {
      Main,
    },
    data () {
      return {
        pageClass: "about",
      }
    },
    methods: {
      setBackgroundImage (image) {
        if(image) {
          return [{ 'backgroundImage': 'url('+require('@/assets/images/'+image)+')' }]
        } else {
          return []
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .list {
    list-style-type: none;

    >li {
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>
