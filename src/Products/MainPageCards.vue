<template>
    <div class="">
        <Header/>
        <CatalogMasks/>
        <ButtonCart class="d-b-480 button__cart-mobile"/>
        <demo-adaptive-modal />
    </div>
</template>

<script>

import Header from '../pages/Header.vue';
import CatalogMasks from '../pages/CatalogMasks.vue'
import ButtonCart from '../components/ButtonCart.vue'
import DemoAdaptiveModal from '../components/Modal_Adaptive.vue'

export default {
    name:"MainPage",
    components: {
        Header,
        CatalogMasks,
        ButtonCart,
        DemoAdaptiveModal,
    }
}
</script>

<style scoped>
.catalog {
    padding: 0px;
}
</style>