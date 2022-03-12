<template>
  <button
  type="button"
  class="button-fast-order"
  >
    Быстрый заказ
  </button>
</template>

<script>
export default {
    name: 'ButtonFastOrder',

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins';

.button-fast-order {
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  @include adaptiv-value (width, 153, 159, 1);  
  
  height: 42px;
  border: 2px solid #000000;
  background-color: #fff;
  color: #000000;
}

</style>