<template>
  <router-link
    :to = "path"
    class="piece"
    :class="[setColorClass()]"
  >
    <dl class="piece-data">
      <dt>{{ theme }}</dt>
      <dd v-if="who">
        <fa-icon icon="user-alt" />
        <p class="piece-data-text">{{ who }}</p>
      </dd>
      <dd v-if="what">
        <fa-icon :icon="['fab', 'font-awesome-flag']" />
        <p class="piece-data-text">{{ what }}</p>
      </dd>
      <dd v-if="where">
        <fa-icon icon="map-marked-alt" />
        <p class="piece-data-text">{{ where }}</p>
      </dd>
      <dd v-if="when">
        <fa-icon icon="calendar-alt" />
        <p class="piece-data-text">{{ when }}</p>
      </dd>
    </dl>
  </router-link>
</template>

<script>
  export default {
    name: 'Piece',
    props: {
      path: {
        type: [String, Object],
        default: () => {}
      },
      colorClass: String,
      theme: String,
      who: String,
      what: String,
      where: String,
      when: String,
    },
    methods: {
      setColorClass () {
        if(this.colorClass) {
          return ['is-' + this.colorClass]
        } else {
          return []
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .piece {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 20px 15px 10px;
    color: #fff;
    text-decoration: none;
    background-size: cover;
    border-radius: 10px;
    background-color: #000;
    box-shadow: 0 0 4px $shadow;

    @each $name, $color in $color-pallet {
      &.is-#{$name} {
        background-color: $color;
      }
    }

    &[style*=background-image] {
      position: relative;
      background-color: transparent;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background: inherit;
        filter: blur(1px) brightness(0.5) opacity(0.5);
        pointer-events: none;
      }

      .piece-data {
        position: relative;
        z-index: 10;
      }
    }

    &-data {
      display: flex;
      flex-direction: column;
      height: 100%;

      dt {
        margin-bottom: 5px;
        text-align: center;
        line-height: 1.4;
        font-size: 2.0rem;

        &:only-child {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding-bottom: 10px;
          margin-bottom: 0;
        }
      }

      dd {
        display: flex;
        align-items: center;
        margin-top: 5px;

        svg {
          width: 15px;
          margin-right: 5px;
        }
      }

      &-text {
        display: block;
        overflow: hidden;
        font-size: 1.2rem;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
