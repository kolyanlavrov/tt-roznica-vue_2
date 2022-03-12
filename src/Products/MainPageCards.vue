<template>
    <div class="">
        <Header/>
        <CatalogMasks/>
    </div>
</template>

<script>
import Header from '../pages/Header.vue';
import CatalogMasks from '../pages/CatalogMasks.vue'
export default {
    name:"MainPage",
    components: {
        Header,
        CatalogMasks,
    }
}
</script>

<style scoped>
.catalog {
    padding: 0px;
}
</style>