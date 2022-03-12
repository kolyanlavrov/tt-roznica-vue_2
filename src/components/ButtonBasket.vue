<template>
  <button
  type="button"
  class="button-basket"
  >
    В корзину
  </button>
</template>

<script>
export default {
  name: 'ButtonBasket',

}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/mixins';

.button-basket {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EC5827;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    @include adaptiv-value (width, 241, 334, 1);
    height: 42px;
}
@media (max-width: 768px) {
  .button-basket {
    margin-left: 0px;
  }
}
</style>