<template>
    <div class="counter">
        <button class="counter-button__decrease" type="button" @click="decreaseCount"></button>
        <input
            class="counter__input"
            type="number"
            :value="count"
            :min="minCount"
            :max="maxCount"
        />
        <button class="counter-button__increase" type="button" @click="increaseCount"></button>
    </div>
</template>

<script>
export default {
    name: 'Counter',

    data () {
        return {
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
};
</script>

<style>
.counter {
    display: flex;
}
.counter-button__decrease,
.counter-button__increase {
    position: relative;
    width: 32px;
    height: 38px;
}
.counter-button__decrease {
    background-color: #E2E2E2;
    color: #000;
}
.counter-button__increase {
    background-color: #EC5827;
    color: #fff;
}
.counter__input {
    text-align: center;
    width: 40px;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
}
.counter-button__decrease::before,
.counter-button__increase::before,
.counter-button__increase::after {
    content: '';
    position: absolute;
    top: 18px;
    left: 9px;
    width: 14px;
    height: 2px;
}
.counter-button__decrease::before {
    background-color: #191919;
    border-radius: 1px;
}
.counter-button__increase::before,
.counter-button__increase::after {
    background-color: #fff;
    border-radius: 1px;
}
.counter-button__increase::after {
    transform: rotate(90deg);
}
</style>
