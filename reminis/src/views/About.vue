<template>
  <div class="l-container">
    <Header
      page-title = "思い出リスト"
      :page-class = "pageClass"
    />
    <Main>
    </Main>
    <Footer
      :page-class = "pageClass"
    />
  </div>
</template>

<script>
  import Header from '@/components/essentials/Header.vue'
  import Main from '@/components/essentials/Main.vue'
  import Footer from '@/components/essentials/Footer.vue'

  export default {
    name: 'About',
    components: {
      Header,
      Main,
      Footer,
    },
    data () {
      return {
        pageClass: "reminis",
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";
</style>
