<template>
    <modal name="example-adaptive" class="example-adaptive"
    :adaptive="true"
    :width="953"
    :height="666"
    :scrollable="true"
    >
        <div class="popup__content">
                <a @click="$modal.hide('example-adaptive')" 
                        class="popup__close close-popup">
                    <img src="../../public/images/icon-svg/close.svg" alt="">
                </a>
            <div class="popup__cart cart">
                <h2 class="cart__title">{{cart.CartTitle}}</h2>
                <div class="cart__wrap">
                    <div class="cart__body body-cart" v-for="(carts, index) in cart.models" :key="index">
                        <a href="#" class="body-cart__close">
                            <img src="../../public/images/icon-svg/closecart.svg" alt="Close">
                        </a>
                        <div class="body-cart__image">
                            <img :src="carts.CartImage" alt="">
                        </div>
                        <div class="body-cart__content">
                            <div class="body-cart__title">{{carts.CartTitle}}</div>
                            <div class="body-cart__subtitle">{{carts.CartSubtitle}}</div>
                            <div class="body-cart__price">88 911 ₽</div>
                            <div class="body-cart__counter counter">
                                <button class="counter__button-decrease" type="button" @click="decreaseCount"></button>
                                <input class="counter__input_c" type="number"
                                    :value="count"
                                    :min="minCount"
                                    :max="maxCount"
                                />
                                <button class="counter__button-increase" type="button" @click="increaseCount"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup__order order">
                <h2 class="order__title">Оформление заказа</h2>
                <div class="order__wrapper">
                    <form @submit.prevent="submit" name="Order" action="#" method="POST" class="order__form form">
                        <fieldset class="order__personal-data">
                            <p>Личные данные</p>
                            <div class="form-group__name personal-data__group">
                                <div class="form-group"
                                    :class="{ 'form-group--error': $v.name.$error }"
                                >
                                    <input type="text" v-model.trim="$v.name.$model" placeholder="Введите имя*" class="order__input" />
                                </div>
                                <div class="error" v-if="!$v.name.required">Укажите имя</div>
                                <div class="error" v-if="!$v.name.minLength">
                                    Имя должно иметь не менее {{ $v.name.$params.minLength.min }} букв.
                                </div>
                            </div>
                            <div class="form-group__surename personal-data__group">
                                <div class="form-group"
                                    :class="{ 'form-group--error': $v.surename.$error }"
                                >
                                    <input type="text" v-model.trim="$v.surename.$model" placeholder="Введите фамилию" class="order__input">
                                </div>
                                <div class="error" v-if="!$v.surename.required">Укажите фамилию</div>
                            </div>
                            <div class="form-group__email personal-data__group">
                                <div class="form-group"
                                    :class="{ 'form-group--error': $v.email.$error }"
                                >
                                    <input type="email" placeholder="Введите e-mail*" class="order__input"
                                    v-model.trim="$v.email.$model" />
                                </div>
                                <div class="error" v-if="!$v.email.required">Укажите имеил</div>
                            </div>
                            <div class="form-group__tel personal-data__group">
                                <div class="form-group "
                                    :class="{ 'form-group--error': $v.tel.$error }"
                                >
                                    <input type="tel" placeholder="Введите номер телефона" class="order__input"
                                    v-model.trim="$v.tel.$model" />
                                </div>
                                <div class="error" v-if="!$v.email.required">Укажите телефон</div>
                            </div>
                            <input type="text" placeholder="Введите адрес*" class="order__input order__input_adress">
                        </fieldset>
                        <fieldset class="order__delivery delivery">
                            <p>Доставка</p>
                            <div class="delivery__wrap">
                                <div class="delivery__radio">
                                    <input type="radio" class="delivery__input" name="Delivery" id="kyiv" value="Kyiv">
                                    <label class="delivery__input-radio" for="kyiv">Курьером по Киеву</label>
                                </div>
                                <div class="delivery__radio">
                                    <input type="radio" class="delivery__input" name="Delivery" id="ukraine"  value="Ukraine">
                                    <label class="delivery__input-radio" for="ukraine">По Украине</label>
                                </div>
                                <div class="delivery__radio">
                                    <input type="radio" class="delivery__input" name="Delivery" id="pickup"  value="Pickup">
                                    <label class="delivery__input-radio" for="pickup">Самовывоз</label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="order__comment">
                            <p>Коментарий к заказу</p>
                            <textarea class="order__textarea" name="comment" placeholder="Введите текст коментария"></textarea>
                        </fieldset>
                        <fieldset class="order__submit">
                            <p>Итого: <span>18 800 ₽</span></p>
                            <button type="submit" class="order__button-submit button">Оформить заказ</button>
                        </fieldset>
                        <p class="italic">*Поля обязательные к заполнению</p>
                    </form>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import data from '../mock/Cart'
import { required, minLength, email, numeric } from "vuelidate/lib/validators";
// sameAs, between
export default {
    name: "Modal_Adaptive",
    data () {
        return {
            cart: data.Cart,
            count: 1,
            maxCount: 100000,
            minCount: 1,
            name: '',
            surename:'',
            email:'',
            tel: '380',
        }
    },
    methods: {
        increaseCount() {
            if (this.count < this.maxCount) {
                this.count++;
            }
        },
        decreaseCount() {
            if (this.count > this.minCount) {
                this.count--;
            }
        },
    },
    validations: {
        name: {
            required,
            minLength: minLength(2),
        },
        surename: {
            required
        },
        email: {email, required},
        tel: {
            required,
            numeric,
            minLength: minLength(12),
        }
    },
};
</script>
<style scoped>
.popup__content {
    background-color: #fff;
    color: #000;
    padding: 22px 43px 0px;
    position: relative;
    display: flex;
}
a.popup__close {
    position: absolute;
    top: 18px;
    right: 18px;
    display: block;
    cursor: pointer;
}
.popup__cart {
    width: 333px;
}
.cart__title,
.order__title {
    font-family: "Oswald";
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
}
.cart__body {
    display: flex;
    border: 1px solid #EC5827;
    position: relative;
    height: 161px;
    margin-bottom: 15px;
}
.cart__body:last-child {
    margin-bottom: 0px;
}
.body-cart__close {
    /* display: inline-block; */
    position: absolute;
    top: 16px;
    right: 16px;
}
.body-cart__image {
    max-width: 159px;
}
.body-cart__image img {
    max-width: 100%;
}
.body-cart__content {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #191919;
	padding: 41px 26px 24px 15px;
}
.body-cart__subtitle {
    font-weight: 500;
}
.body-cart__price {
    font-size: 15px;
    line-height: 18px;
    margin: 9px 0px 13px;
}
.body-cart__counter {
    display: flex;
}
.counter__button-decrease,
.counter__button-increase {
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 2px;
}
.counter__button-decrease {
    background-color: #E2E2E2;
    color: #000;
}
.counter__button-increase {
    background-color: #EC5827;
    color: #fff;
}
.counter__button-decrease::before,
.counter__button-increase::before,
.counter__button-increase::after {
    content: '';
    position: absolute;
    top: 13px;
    left: 9px;
    width: 10px;
    height: 2px;
}
.counter__input_c {
    text-align: center;
    width: 28px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
}
.counter__button-decrease::before {
    background-color: #191919;
    border-radius: 1px;
}
.counter__button-increase::before,
.counter__button-increase::after {
    background-color: #fff;
    border-radius: 1px;
}
.counter__button-increase::after {
    transform: rotate(90deg);
}
.popup__order {
    max-width: 474px;
    margin-left: 43px;
}
.order__title {
    margin-bottom: 15px;
}
.personal-data__group {
    display: inline-block;
    height: 42px;
    margin-bottom: 10px;
}
.form-group {
    
}
.order__input {
    
}
.form-group .order__input {
    
}
.error {
    display: none;
    margin-top: -1.6875rem;
}
.form-group--error input {
    border-color: rgb(247, 148, 131);
}
.form-group--error+.error,  
.form-group+.error {
    color: rgb(245, 127, 108);
    font-size: 11px;
    font-weight: 400;
}
.form-group--error+.error {
    display: block;
}
.form-group--error {
    margin-bottom: 2rem;
}
.order__input {
    margin-bottom: 0px;
}

fieldset {
    font-weight: 500;
    font-size: 18px;
    /* line-height: 21px; */
    color: #000000;
}
.order__personal-data {
    margin-bottom: 26px;
}
.order__personal-data p,
.delivery p,
.order__comment p {
    margin-bottom: 11px;
}
.order__personal-data .personal-data__group:nth-child(odd) {
    margin-left: 20px;
}
.order__personal-data input,
.order__textarea {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
}
.order__personal-data input::placeholder,
.order__textarea::placeholder {
    color: #979797;
}
.order__input,
.order__textarea {
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    text-align: center;
}
.order__input {
	width: 227px;
    height: 42px;
}
.order__input_adress {
	width: 100%;
	margin-bottom: 0px;
}
.order__input:focus {
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    text-align: center;
}
.order__delivery {
	margin-bottom: 27px;
}
.delivery__wrap {
    display: flex;
    justify-content: space-between;
}
.delivery__radio {
    position: relative;
}
.delivery__input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
}
.delivery__input-radio {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    padding-left: 32px;
    cursor: pointer;
}
.delivery__input-radio::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;

    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;

    position: absolute;
    top: -3px;
    left: 0px;
    z-index: 1;
    transition: background .1s linear, border .1s linear;
}
.delivery__input-radio::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;

    background-color: #fff;
    border-radius: 50%;

    position: absolute;
    top: 5px;
    left: 8px;
    z-index: 2;
}
.delivery__input:checked + .delivery__input-radio::before {
    background-color: #EC5827;
}
.order__comment {
	margin-bottom: 80px;
}
.order__textarea {
	width: 100%;
	height: 61px;
	resize: none;
	padding-top: 13px;
}
.order__submit {
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
}
button.order__button-submit.button {
	margin: 0px;
	width: 227px;
	height: 42px;
	background: #EC5827;
	border-radius: 2px;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #FFFFFF;
}
.order__submit p {
	font-size: 22px;
	line-height: 21px;
	color: #191919;
	border-bottom: 1px solid #191919;
	align-self: flex-end;
	padding-bottom: 10px;
}
.order__submit span {
	font-weight: 700;
}
p.italic {
	margin-top: 60px;
	font-style: italic;
	font-weight: 400;
}
/* ================MEDIA================ */
@media (max-width: 768px) {
	.popup__content {
		flex-direction: column;
        /* padding: 0px; */
	}
	.popup__cart,
    .popup__order {
        width: 100%;
		margin: 0px auto;
	}
    .cart__wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
	.cart__title, .order__title {
		text-align: center;
	}
    .cart__body {
        width: 333px;
    }
	.popup__order {
		margin-top: 21px;
	}
}
@media (max-width: 480px) {
    .popup__content {
        padding: 0px 21px;
	}
    .popup__cart,
    .popup__order,
    .order__input {
        width: 333px;
	}
    .popup__order {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .order__personal-data input:nth-child(odd) {
        margin-left: 0px;
    }
    .delivery__wrap {
        flex-direction: column;
        text-align: left;
    }
    .delivery__radio {
        margin-bottom: 22px;
    }
    .delivery__radio:last-child {
        margin-bottom: 0px;
    }
    .delivery__input-radio {
        padding-left: 40px;
    }
    .order__comment {
        margin-bottom: 57px;
    }
    .order__textarea {
        height: 124px;
    }
    .order__submit {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    button.order__button-submit.button {
        width: 189px;
        padding: 0px;
        margin: 27px auto 0px;
    }
    .order__submit p {
        border-bottom: none;
        padding: 0px;
        align-self:center;
    }
    p.italic {
        margin-top: 50px;
    }
}
@media (max-width: 320px) {
    .popup__content {
        padding: 0px 10px;
	}
    .popup__cart,
    .popup__order,
    .order__input {
        width: 300px;
	}
    .body-cart__content {
        padding: 41px 5px 0px 5px;
    }
}
</style>