<template>
    <div class="menu">
        <div class="logo"><a href="/">SITE<span class="blue">NAME</span></a></div>
        <div class="menu-links">
            <router-link :to="{ path: '/' }" :class="{'active': props.activeItem === 'home'}">Main</router-link>
            <router-link :to="{ path: 'deposit' }" :class="{'active': props.activeItem === 'deposit'}">Deposit</router-link>
            <router-link :to="{ path: 'stream' }" :class="{'active': props.activeItem === 'stream'}">Stream</router-link>
            <a href="">Sign in</a>
        </div>
        <div class="mobile-menu" :class="{'active': isOpenMenu}">
            <img src="../../../assets/images/common/menu-open.svg" @click="toggleMenu">
            <div class="mobile-menu-wrap">
                <div class="mobile-menu-header">
                    <span>Menu</span>
                    <img src="../../../assets/images/common/menu-close.svg" class="menu-close" @click="toggleMenu">
                </div>
                <div class="mobile-menu-body">
                    <a href="/" class="item">
                        <div class="item-icon">
                            <img src="../../../assets/images/common/menu-home.svg" alt="">
                        </div>
                        <span>Main</span>
                    </a>
                    <a href="/deposit" class="item">
                        <div class="item-icon">
                            <img src="../../../assets/images/common/menu-deposit.svg" alt="">
                        </div>
                        <span>Deposit</span>
                    </a>
                    <a href="/stream" class="item">
                        <div class="item-icon">
                            <img src="../../../assets/images/common/menu-stream.svg" alt="">
                        </div>
                        <span>Stream</span>
                    </a>
                    <a href="/login" class="item">
                        <div class="item-icon">
                            <img src="../../../assets/images/common/menu-login.svg" alt="">
                        </div>
                        <span>Sign in</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
const isOpenMenu = ref(false);

const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
}

const props = defineProps({
    activeItem: {
        type: String,
        required: false
    }
});
</script>