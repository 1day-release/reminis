<template>
  <div class="l-container">
    <Header />
    <Main>
    </Main>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/essentials/Header.vue'
  import Main from '@/components/essentials/Main.vue'
  import Footer from '@/components/essentials/Footer.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Main,
      Footer,
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";
</style>
