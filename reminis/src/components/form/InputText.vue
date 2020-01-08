<template>
  <Label :label="label">
    <input type="text"
      class="input-text"
      :placeholder="placeholder"
    />
  </Label>
</template>

<script>
  import Label from '@/components/form/Label.vue'

  export default {
    name: 'InputText',
    props: {
      label: String,
      placeholder: String,
    },
    components: {
      Label,
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .label-text {
    display: block;
    line-height: 1.5;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .input-text {
    display: block;
    width: 100%;
    height: 50px;
    padding: 5px 20px;
    margin-top: 10px;
    font-weight: normal;
    border-radius: 25px;
    box-shadow: 0 1px 3px $shadow;

    &::placeholder {
      color: map-get($color-text, "gray");
    }
  }
</style>
