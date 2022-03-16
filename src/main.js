import Vue from 'vue'
import App from './App.vue'
// Підключаємо BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// Підключаємо VueRouter 
import VueRouter from 'vue-router'
import router from './js/router'
Vue.use(VueRouter)
// Підключаємо модальні вікна (попапи)
import VModal from 'vue-js-modal'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal)

// Підключаємо CSS Стилі
import './assets/styles/styles.scss'
import './assets/styles/style_obnul.css'
import './assets/styles/style.css'
import './assets/styles/iconfont.css'
// Підключаємо Vuelidate Валідатор
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

new Vue({
	render: h => h(App),
	el: '#app',
	router,
}).$mount('#app')
