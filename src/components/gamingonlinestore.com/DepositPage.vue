
<template>
    <Header :active-item="currentRoute"></Header>
    <PrivacyPolicy v-if="isOpenModalPrivacyPolicy"></PrivacyPolicy>
    <CookiePolicy v-if="isOpenModalCookiePolicy"></CookiePolicy>
    <TermsConditions v-if="isOpenModalTerms"></TermsConditions>

    <h1 class="title animate__animated animate__fadeInDown">Top up for the most popular gaming platform within a few clicks</h1><img class="smile-glasses" src="../../assets/images/gamingonlinestore/smile-glasses.png">

    <div class="games-slider-block">
        <div class="games-slider games-slider-top">
            <div class="item"><img src="../../assets/images/gamingonlinestore/1.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/2.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/3.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/4.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/5.png"></div>
        </div><img class="smile-wow" src="../../assets/images/gamingonlinestore/smile-wow.png">
        <div class="games-slider games-slider-bottom">
            <div class="item"><img src="../../assets/images/gamingonlinestore/6.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/7.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/8.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/9.png"></div>
            <div class="item"><img src="../../assets/images/gamingonlinestore/10.png"></div>
        </div>
    </div>
    <div class="work">

        <div class="header">How it works</div>
        <div class="work-block">
            <div class="item">
                <div class="picture"><img src="../../assets/images/gamingonlinestore/steam.svg"></div>
                <div class="text">Enter your account name used for authorization in Steam (but NOT a nickname).</div>
            </div>
            <div class="item">
                <div class="picture"><img src="../../assets/images/gamingonlinestore/wallet.svg"></div>
                <div class="text">Enter the desired amount and click continue.</div>
            </div>
            <div class="item">
                <div class="picture"><img src="../../assets/images/gamingonlinestore/time.svg"></div>
                <div class="text">Funds will appear on your account within 10-15 minutes after payment.</div>
            </div>
        </div>


        <form class="form" id="payFormId" >
            <input required class="form-input" type="text"  id="steamLogin" name="steamLogin" placeholder="Steam account’s name">
            <div class="form-group">
                <input required class="form-input" id="amount" name="amount" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" type="text" min="5.00" value="5.00" placeholder="Amount"><img class="dollar" src="../../assets/images/gamingonlinestore/dollar.svg">
            </div>
            <input name="hostname" type="hidden" value="{{host}}">
            <button class="button-next">Continue</button>
        </form>


    </div>


    <Footer></Footer>

</template>


<script setup>
import {onMounted, computed} from "vue";
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import Header from '../gamingonlinestore.com/block/HeaderBlock.vue';
import Footer from '../gamingonlinestore.com/block/FooterBlock.vue';
import PrivacyPolicy from "@/components/gamingonlinestore.com/block/PrivacyPolicy.vue";
import CookiePolicy from "@/components/gamingonlinestore.com/block/CookiePolicy.vue";
import TermsConditions from "@/components/gamingonlinestore.com/block/TermsConditions.vue";

const route = useRoute()
const currentRoute = computed(() => route.name ? route.name : '')

const store = useStore()
const isOpenModalPrivacyPolicy = computed(() => store.getters.isOpenModalPrivacyPolicy)
const isOpenModalCookiePolicy = computed(() => store.getters.isOpenModalCookiePolicy)
const isOpenModalTerms = computed(() => store.getters.isOpenModalTerms)



onMounted(() => {

})


</script>
