<template>
    <div class="">
        <Header />
        <div class="mask-card">
            <div class="container">
                <nav
                    style="--bs-breadcrumb-divider: '>'"
                    aria-label="breadcrumb"
                >
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">
                            <router-link :to="{ name: 'main' }">
                                Одноразовые маски
                            </router-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            Маска медицинская одноразовая трехслойная,
                            {{ card.Name }}
                        </li>
                    </ol>
                </nav>
                <div class="mask-card__body d-flex flex-wrap">
                    <div class="mask-card__slider col-sm-6 col-12">
                        <div class="mask-card__slider-wrap slider-wrap">
                            <div class="slider-wrap__top">
                                <swiper
                                    class="swiper gallery-top"
                                    :options="swiperOptionTop"
                                    ref="swiperTop"
                                >
                                    <swiper-slide
                                        class="mask-card__slide-top"
                                        v-for="swiper in item.cards"
                                        :key="swiper.id"
                                    >
                                        <img :src="card.CatalogImage" alt="" />
                                    </swiper-slide>
                                </swiper>
                                <div
                                    class="swiper-pagination mask-card__pagination"
                                    slot="pagination"
                                ></div>
                            </div>
                            <swiper
                                class="swiper gallery-thumbs"
                                :options="swiperOptionThumbs"
                                ref="swiperThumbs"
                            >
                                <swiper-slide
                                    class="mask-card__slide-bot"
                                    v-for="swiper in item.cards"
                                    :key="swiper.id"
                                >
                                    <img :src="card.CatalogImage" alt="" />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div class="mask-card__about col-sm-6 col-12">
                        <div class="mask-card__info">
                            <p class="mask-card__title">
                                {{ card.Title }}
                            </p>
                            <p class="mask-card__article text">
                                Артикул:
                                <span class="mask-card__article-bold">{{
                                    card.Article
                                }}</span>
                            </p>
                            <p class="mask-card__article-orange">
                                БЕСПЛАТНАЯ ДОСТАВКА ПО РОСИИ ОТ 10 000 ШТУК
                            </p>
                            <p class="mask-card__size text">
                                Размер
                                <span class="mask-card__size-border">{{
                                    card.Size
                                }}</span>
                            </p>
                            <div class="mask-card__counter">
                                <p class="mask-card__price">
                                    {{ card.Price }} ₽
                                </p>
                                <div class="mask-card__count">
                                    <p>Кол-во</p>
                                    <Counter />
                                </div>
                            </div>
                            <div class="mask-card__buttons">
                                <ButtonBasket />
                                <ButtonFastOrder />
                            </div>
                            <p class="text">Доступны другие варианты:</p>
                            <div class="mask-card__variants">
                                <p class="mask-card__text-border">
                                    Упаковка <br />
                                    20 шт.
                                </p>
                                <p class="mask-card__text-border">
                                    Упаковка <br />
                                    50 шт.
                                </p>
                                <p class="mask-card__text-border">
                                    Упаковка <br />
                                    100 шт.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs />
            </div>
        </div>
        <ButtonCart class="d-b-480 button__cart-mobile"/>
        <demo-adaptive-modal />
    </div>
</template>
<script>
import Header from "../pages/Header.vue";
import Counter from "../components/Counter.vue";
import ButtonBasket from "../components/ButtonBasket.vue";
import ButtonFastOrder from "../components/ButtonFastOrder.vue";
import Tabs from "../components/Tabs.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import ButtonCart from '../components/ButtonCart.vue'
import DemoAdaptiveModal from '../components/Modal_Adaptive.vue'
// import 'swiper/swiper-bundle.css'
import "swiper/css/swiper.css";
import data from "../mock/cards";
export default {
    name: "Card",
    components: {
        Counter,
        Header,
        ButtonBasket,
        ButtonFastOrder,
        Tabs,
        Swiper,
        SwiperSlide,
        ButtonCart,
        DemoAdaptiveModal,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            item: data.products,
            card: null,

            swiperOptionTop: {
                loop: true,
                // loopedSlides: 5,
                // spaceBetween: 10,
                // centeredSlides: true,
                slidesPerView: "auto",
                pagination: {
                    el: ".swiper-pagination",
                },
            },
            swiperOptionThumbs: {
                // freeMode: true,
                loop: true,
                // loopedSlides: 1,
                spaceBetween: 20,
                // centeredSlides: true,
                slidesPerView: "auto",
                // touchRatio: 0.2,
                // slideToClickedSlide: true,
            },
        };
    },
    created() {
        console.log(data);
        const card = data.products.cards.find(
            (card) => card.id == this.$route.params.id
        );
        if (card) {
            this.card = card;
            console.log(this.card);
        }
    },
    computed: {
        productId() {
            return +this.$route.params.id;
        },
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper;
            const swiperThumbs = this.$refs.swiperThumbs.$swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.mask-card__slider-wrap {
    position: relative;
}
.mask-card__body {
    margin: 0px -12.5px;
}
.mask-card__slider,
.mask-card__about {
    padding: 0px 12.5px;
}
.slider-wrap__top {
    position: relative;
}
.gallery-top {
    position: relative;
    height: 82.33%;
    margin-bottom: 20px;
    overflow-y: hidden;
}
.gallery-thumbs {
    height: 17.67%;
    box-sizing: border-box;
    /* padding: 0px 131px; */
    margin: 0px 120px;
    display: block;
}
.mask-card__slide-top {
    padding: 0px 45px;
    @include adaptiv-value(padding-left, 45, 0, 1);
    @include adaptiv-value(padding-right, 45, 0, 1);
}
.swiper-pagination {
    display: none;
}
.mask-card__slide-bot {
    width: 73px;
    height: 73px;
}
.mask-card__slide-top img,
.mask-card__slide-bot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper-pagination-bullets.swiper-pagination-bullet {
    background: #c4c4c4;
    width: 10px;
    height: 10px;
    opacity: 1;
}
.swiper-pagination-bullets.swiper-pagination-bullet-active {
    background-color: #ec5827;
}
.breadcrumb-item a,
.breadcrumb {
    color: #999999;
    font-size: 14px;
    line-height: 16px;
}
.breadcrumb {
    padding: 18px 0px;
}
.breadcrumb-item a {
    text-decoration: underline;
}
.mask-card__about {
    display: flex;
}
.mask-card__info {
    display: flex;
    flex-direction: column;
    padding-top: 25px;
}
.mask-card__title {
    font-weight: bold;
    // font-size: 30px;
    // line-height: 35px;
    @include adaptiv-font(30, 21);
    @include adaptiv-value(line-height, 35, 25, 1);
    color: #000000;
    margin-bottom: 12px;
}
.mask-card__article {
    margin-bottom: 8px;
    @include adaptiv-value(margin-bottom, 8, 15, 1);
}
.mask-card__article-bold {
    font-weight: bold;
}
.mask-card__article-orange {
    color: #ec5827;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 15px;
}
.mask-card__size-border {
    border: 1px solid #000000;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0px 5px;
}
.mask-card__counter {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding-top: 23px;
    @include adaptiv-value(padding-bottom, 44, 37, 1);
}
.mask-card__count {
    display: flex;
    align-items: center;
    margin: 0 0 0 42px;
}
.mask-card__count p {
    font-size: 20px;
    line-height: 23px;
    color: #e2e2e2;
    margin: 0 11px 0 0;
}
.mask-card__price {
    font-weight: 900;
    @include adaptiv-font(48, 36);
    @include adaptiv-value(line-height, 56, 42, 1);
    // font-size: 48px;
    // line-height: 56px;
}
.mask-card__buttons {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
}
.button-basket {
    margin: 0px 21px 0px 0px;
}
.mask-card__variants {
    display: flex;
    padding: 15px 0 0 0;
}
.mask-card__text-border {
    font-weight: bold;
    font-size: 17px;
    color: #ec5827;
    text-align: center;
    @include adaptiv-value(margin-right, 21, 17, 1);
    @include adaptiv-value(width, 110, 100, 1);
    height: 60px;
    border: 2px solid #ec5827;
    display: flex;
    align-items: center;
    justify-content: center;
}
.mask-card__text-border:last-child {
    margin: 0px;
}
.cards-tabs__subtitle {
    font-size: 20px;
    line-height: 23px;
    text-transform: capitalize;
    color: #c4c4c4;
}
@media (max-width: 1024px) {
    .gallery-thumbs {
        margin: 0px 110px;
    }
}
@media (max-width: 992px) {
    .button-fast-order,
    .button-basket {
        margin: 0px auto;
    }
}
@media (max-width: 768px) {
    .button-basket {
        margin: 0px 0px 10px 31px;
    }
    .swiper.gallery-thumbs {
        display: none;
    }
    .swiper-pagination {
        display: block;
        width: 100%;
        margin: 0px auto;
    }
    .mask-card__slider {
        padding: 0px;
        margin: 0px;
    }
    .mask-card__slider-wrap {
        margin: 0px -8.5px;
    }
}
@media (max-width: 576px) {
    .button-fast-order {
        margin: 30px auto 50px;
    }
    .mask-card__article-orange {
        display: none;
    }
    .breadcrumb {
        display: none;
    }
    .slider-wrap__top {
        padding-top: 57px;
    }
    .button-basket {
        margin: 0px auto;
        width: 334px;
    }
}
@media (max-width: 320px) {
    .mask-card__title {
        // text-align: justify;
    }
    .mask-card__count {
        margin: 0px 0px 0px 10px;
    }
    .mask-card__price {
        font-size: 30px;
    }
    .mask-card__title {
        font-size: 18px;
    }
    .button-basket {
        width: 242px;
    }
    .mask-card__variants {
        justify-content: space-between;
    }
    .mask-card__text-border {
        margin-right: 5px;
        font-size: 15px;
        width: 85px;
    }
    .your-review__input {
        width: 290px;
    }
}
</style>
