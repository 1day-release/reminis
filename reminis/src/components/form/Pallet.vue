<template>
  <ul class="pallet">
    <li
      v-for="(item, index) in pallet"
      :key="index"
    >
      <input
        type="radio"
        name="color_pallet"
        :id="item.color"
        class="color"
        :class="'is-'+item.color"
      />
      <label :for="item.color">
        {{ item.text }}
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'InputText',
    data () {
      return {
        pallet: [
          { 'color': 'blue',   'text': '青色' },
          { 'color': 'red',    'text': '赤色' },
          { 'color': 'yellow', 'text': '黄色' },
          { 'color': 'green',  'text': '緑色' },
          { 'color': 'purple', 'text': '紫色' },
          { 'color': 'black',  'text': '黒色' },
        ],
      }
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .pallet {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  .color {
    display: none;

    &+label {
      position: relative;
      display: block;
      overflow: hidden;
      width: 30px;
      height: 30px;
      white-space: nowrap;
      text-indent: 100%;
      border-radius: 7px;

      &::before {
        content: "";
        position: absolute;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        margin: auto;
        border: 2px solid transparent;
        border-radius: inherit;
        transition-duration: $duration;
      }
    }

    @each $key, $color in $color-pallet {
      &.is-#{$key} {
        &+label {
          background-color: $color;
        }
      }
    }

    &:checked {
      &+label {

        &::before {
          border-color: #fff;
        }
      }
    }
  }
</style>
