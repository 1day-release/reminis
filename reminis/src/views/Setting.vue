<template>
  <div class="l-container">
    <Header
      page-title = "設定"
      :page-class = "pageClass"
    />
    <Main>
      <div class="wrap">
        <section>
          <h2 class="heading">Reminisについて</h2>
          <ul class="list">
            <li>
              <a
                href="//docs.google.com/document/d/1XOpShHQ2ojKlo8NfBrQhyWIel8tybHudtVjq0me6384/edit?usp=sharing"
                target="_blank"
              >
                プライバシーポリシー
                <fa-icon icon="external-link-alt" />
              </a>
            </li>
            <li>
              <a
                href="//docs.google.com/document/d/1RJseMtl4XrZB843Sa6qnOwBTnisQfSJk2H_1ZBTypas/edit?usp=sharing"
                target="_blank"
              >
                利用規約
                <fa-icon icon="external-link-alt" />
              </a>
            </li>
          </ul>
        </section>
      </div>
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
    name: 'Setting',
    components: {
      Header,
      Main,
      Footer,
    },
    data () {
      return {
        pageClass: "setting",
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

  .heading {
    margin: 20px 0;
    line-height: 1.5;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .list {
    list-style-type: none;
    line-height: 1.5;
    font-size: 1.6rem;

    >li {
      margin-top: 15px;

      &:first-child {
        margin-top: 0;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;

      svg {
        margin-left: 5px;
        font-size: 1.4rem;
      }
    }
  }
</style>
