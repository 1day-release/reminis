<template>
  <footer>
    <div
      class="l-footer"
      :class="[setPageClass()]"
    >
      <router-link
        :to="{ name: 'Home' }"
        class="footer-button"
        :class="{'is-active': $route.path === '/'}"
      >
        <fa-icon icon="suitcase" />
        <span>やりたいこと</span>
      </router-link>
      <router-link
        :to="{ name: 'About' }"
        class="footer-button"
        :class="{'is-active': $route.path === '/about'}"
      >
        <fa-icon icon="film" />
        <span>思い出</span>
      </router-link>
      <router-link
        :to="{ name: '' }"
        class="footer-button"
        :class="{'is-active': $route.path === '/settings'}"
      >
        <fa-icon icon="cog" />
        <span>設定</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
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

  .l-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $header-height;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(#000, 0.3);

    &.is-future {
      color: map-get($color-brand, "future");
    }

    &.is-reminis {
      color: map-get($color-brand, "reminis");
    }
  }

  .footer {
    &-button {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: calc(100% - 20px);
      margin: 0 10px;
      font-size: 1.6rem;
      color: map-get($color-text, "gray");
      text-decoration: none;

      >span {
        margin-top: 3px;
        font-size: 1.2rem;
      }

      &.is-active {
        color: inherit;
      }
    }
  }
</style>
