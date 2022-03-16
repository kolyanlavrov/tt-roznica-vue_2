<template>
    <button class="button__cart" @click="$modal.show('example-adaptive')">
        <picture>
            <source media="(max-width: 480px)" srcset="../../public/images/icon-svg/button-cart-mobile.svg">
            <img src="../../public/images/icon-svg/korzina.svg" alt="">
        </picture>
    </button>
</template>

<script>
export default {
    name: "ButtonCart",
    components: {
    },
    // mounted() {
    //     const popupLinks = document.querySelectorAll('.popup-link');
    //     // const body = document.querySelector('body');
    //     // const lockPadding = document.querySelectorAll(".lock-padding");

    //     let unlock = true;
    //     // const timeout = 800;

    //     if (popupLinks.length > 0) {
    //         for (let index = 0; index < popupLinks.length; index++) {
    //             const popupLink = popupLinks[index];
    //             popupLink.addEventListener("click", function (e) {
    //                 const popupName = popupLink.getAttribute('href').replace('#', '');
    //                 const curentPopup = document.getElementById(popupName);
    //                 popupOpen(curentPopup);
    //                 e.preventDefault();
    //             });
    //         }
    //     }

    //     const popupCloseIcon = document.querySelectorAll('.close-popup');
    //     if (popupCloseIcon.length > 0) {
    //         for (let index = 0; index < popupCloseIcon.length; index++) {
    //             const el = popupCloseIcon[index];
    //             el.addEventListener('click', function (e) {
    //                 popupClose(el.closest('.popup'));
    //                 e.preventDefault();
    //             });
    //         }
    //     }

    //     function popupOpen(curentPopup) {
    //         if (curentPopup && unlock) {
    //             const popupActive = document.querySelector('.popup.open');
    //             if (popupActive) {
    //                 popupClose(popupActive, false);
    //             } else {
    //                 // bodyLock();
    //             }
    //             curentPopup.classList.add('open');
    //             curentPopup.addEventListener("click", function (e) {
    //                 if (!e.target.closest('.popup__content')) {
    //                     popupClose(e.target.closest('.popup'));
    //                 }
    //             });
    //         }
    //     }
    //     function popupClose(popupActive, doUnlock = true) {
    //         if (unlock) {
    //             popupActive.classList.remove('open');
    //             if (doUnlock) {
    //                 // bodyUnLock();
    //             }
    //         }
    //     }

    //     // function bodyLock() {
    //     //     const lockPaddingValue = '17px';
    //     //     // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    //     //     if (lockPadding.length > 0) {
    //     //         for (let index = 0; index < lockPadding.length; index++) {
    //     //             const el = lockPadding[index];
    //     //             el.style.paddingRight = lockPaddingValue;
    //     //         }
    //     //     }
    //     //     body.style.paddingRight = lockPaddingValue;
    //     //     body.classList.add('lock');

    //     //     unlock = false;
    //     //     setTimeout(function () {
    //     //         unlock = true;
    //     //     }, timeout);
    //     // }

    //     // function bodyUnLock() {
    //     //     setTimeout(function () {
    //     //         if (lockPadding.length > 0) {
    //     //             for (let index = 0; index < lockPadding.length; index++) {
    //     //                 const el = lockPadding[index];
    //     //                 el.style.paddingRight = '17px';
    //     //                 // el.style.paddingRight = '0px';
    //     //             }
    //     //         }
    //     //         body.style.paddingRight = '0px';
    //     //         body.classList.remove('lock');
    //     //     }, timeout);

    //     //     unlock = false;
    //     //     setTimeout(function () {
    //     //         unlock = true;
    //     //     }, timeout);
    //     // }

    //     document.addEventListener('keydown', function (e) {
    //         if (e.which === 27) {
    //             const popupActive = document.querySelector('.popup.open');
    //             popupClose(popupActive);
    //         }
    //     });

    //     (function () {
    //         // Проверяем поддержку
    //         if (!Element.prototype.closest) {
    //             // Реализуем
    //             Element.prototype.closest = function (css) {
    //                 var node = this;
    //                 while (node) {
    //                     if (node.matches(css)) return node;
    //                     else node = node.parentElement;
    //                 }
    //                 return null;
    //             };
    //         }
    //     })();

    //     (function () {
    //         // Проверяем поддержку
    //         if (!Element.prototype.matches) {
    //             // Определяем свойство
    //             Element.prototype.matches = Element.prototype.matchesSelector ||
    //                 Element.prototype.webkitMatchesSelector ||
    //                 Element.prototype.mozMatchesSelectoк ||
    //                 Element.prototype.matchesSelector;
    //         }
    //     })();
    // }
}
</script>

<style scoped>
.button__cart {
    background-color: #fff;
    margin-left: 21px;
}
@media (max-width: 768px) {
    .button__cart {
        margin-left: 0px;
    }
}
@media (max-width: 480px) {
    .button__cart-mobile {
        width: 54px;
        height: 54px;
        background-color: #fff;
        border-radius: 50%;

        position: fixed;
        z-index: 999;
        bottom: 20px;
        right: 20px;
    }
    .button__cart-mobile img {
        position: absolute;
        top: 16px;
        left: 10px;
    }
}

</style>