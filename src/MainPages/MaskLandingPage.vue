<template>
    <div class="wrapper">
        <Header/>
        <mainbaner/>
        <CatalogMasks/>
        <Designer/>
        <Model/>
        <Production/>
        <Advantages/>
        <Opt/>
        <Materials/>
        <Map/>
        <Footer/>
        <ButtonCart class="d-b-480 button__cart-mobile"/>
        <demo-adaptive-modal />
        
    </div>
</template>

<script>
import Header from '../pages/Header.vue';
import mainbaner from '../pages/MainBaner.vue';
import CatalogMasks from '../pages/CatalogMasks';
import Designer from '../pages/Designer'; 
import Model from '../pages/Model';
import Production from '../pages/Production';
import Advantages from '../pages/Advantages.vue';
import Opt from '../pages/Opt.vue';
import Materials from '../pages/Materials.vue';
import Map from '../pages/Map.vue';
import Footer from '../pages/Footer.vue'
import ButtonCart from '../components/ButtonCart.vue'
import DemoAdaptiveModal from '../components/Modal_Adaptive.vue'


export default {
    name: "MaskLandingPage",
	components: {
        Header,
        mainbaner,
        CatalogMasks,
        Designer,
        Model,
        Production,
        Advantages,
        Opt,
        Materials,
        Map,
        Footer,
        ButtonCart,
        DemoAdaptiveModal,
        
	},
}
</script>

<style>
.wrapper {
    position: relative;
    }
@media (max-width: 425px) {
    
    /* .button__cart {
        position: absolute;
        top: 50px;
        left: 50px;
    } */
}
</style>