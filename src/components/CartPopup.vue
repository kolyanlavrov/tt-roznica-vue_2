<template>
    <div id="popup" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <a href="#header" class="popup__close close-popup">
                    <img src="../../public/images/icon-svg/close.svg" alt="Close">
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
                        <form name="Order" action="#" method="POST" class="order__form form">
                            <fieldset class="order__personal-data">
                                <p>Личные данные</p>
                                <input type="text" placeholder="Введите имя*" class="order__input">
                                <input type="text" placeholder="Введите фамилию" class="order__input">
                                <input type="email" placeholder="Введите e-mail*" class="order__input">
                                <input type="tel" placeholder="Введите номер телефона" class="order__input">
                                <input type="text" placeholder="Введите адрес*" class="order__input order__input_adress">
                            </fieldset>
                            <fieldset class="order__delivery delivery">
                                <p>Доставка</p>
                                <div class="delivery__wrap">
                                    <div class="delivery__radio">
                                        <input class="delivery__input" type="radio" checked name="delivery" value="Kyiv" id="kyiv">
                                        <label for="kyiv" class="delivery__input-radio">Курьером по Киеву</label>
                                    </div>
                                    <div class="delivery__radio">
                                        <input class="delivery__input" type="radio" name="delivery" value="Ukraine" id="ukraine">
                                        <label for="ukraine" class="delivery__input-radio">По Украине</label>
                                    </div>
                                    <div class="delivery__radio">
                                        <input class="delivery__input" type="radio" name="delivery" value="pickup" id="pickup">
                                        <label for="pickup" class="delivery__input-radio">Самовывоз</label>
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
        </div>
    </div>
</template>

<script>
import data from '../mock/Cart'
export default {
    name: "CartPopup",
    data () {
        return {
            cart: data.Cart,
            count: 1,
            maxCount: 100000,
            minCount: 1,
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
    components: {
    }
}
</script>

<style>

.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0px;
    left: 0px;
    opacity: 0;
    visibility: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.8s ease 0s;
    z-index: 50;
}
.popup.open {
    opacity: 1;
    visibility: visible;
}
.popup.open .popup__content {
    transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
    opacity: 1;
}
.popup__body {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
}
.popup__content {
    /* background-color: #fff; */
    color: #000;
    max-width: 953px;
    max-height: 666px;
    padding: 22px 43px 0px;
    position: relative;
    transition: all 0.8s ease 0s;
    opacity: 0;
    transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
    overflow-y: auto;
    display: flex;
}
a.popup__close {
    position: absolute;
    top: 18px;
    right: 18px;
    display: block;
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

fieldset {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
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
.order__personal-data input:nth-child(odd) {
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
	margin-bottom: 10px;
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
.delivery__input-radio input {
    appearance: none;
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
		/* max-width: 453px; */
		/* max-height: 477px; */
	}
	.popup__cart {
		margin: 0px auto;
	}
	.cart__title, .order__title {
		text-align: center;
	}
	.popup__order {
		margin-top: 21px;
	}
}
@media (max-width: 768px) {

}
</style>