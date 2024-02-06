<template>
    <Header :active-item="currentRoute"></Header>
    <PrivacyPolicy v-if="isOpenModalPrivacyPolicy"></PrivacyPolicy>
    <CookiePolicy v-if="isOpenModalCookiePolicy"></CookiePolicy>
    <TermsConditions v-if="isOpenModalTerms"></TermsConditions>

    <div class="stream">

        <h3>Popular streams</h3>
        <div class="stream-list">
            <div class="stream-item" v-for="item in getComputedStream" :key="item.id">
                <a :href="'https://www.twitch.tv/' + item.user_name" target="_blank">
                    <img :src=getImg(item.thumbnail_url) alt="">
                </a>
                <span class="stream-title">{{item.title}}</span>
            </div>
        </div>
    </div>


    <Footer></Footer>

</template>


<script setup>
import axios from 'axios'
import {onMounted, computed, ref} from "vue";
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
const isTwitchToken = computed(() => store.getters.isTwitchToken)

const clientId = 'zahuf5vbm9umtgv38pbai6vd4wyeuj'; // замените на ваш клиентский идентификатор Twitch
const gameName = 'Dota 2';
const streamerList = ref();

onMounted(() => {
    if (!isTwitchToken.value) {
        axios.post(`https://id.twitch.tv/oauth2/token`, {
            client_id: 'zahuf5vbm9umtgv38pbai6vd4wyeuj',
            client_secret: 'y5yoss19866rt8ayq29syqhnshf34f',
            grant_type: 'client_credentials'
        })
            .then(res => {
                store.dispatch('changeToken', res.data.access_token);
                getGameList();
            });
    }

    function getGameList() {
        axios.get(`https://api.twitch.tv/helix/streams?game=${encodeURIComponent(gameName)}`, {
            headers: {
                'Client-ID': clientId,
                'Authorization': 'Bearer ' + isTwitchToken.value
            }
        })
            .then(res => {
                streamerList.value = res.data
            })
    }
})

const getComputedStream = computed(() => {
    return streamerList.value && streamerList.value.data ? streamerList.value.data : ''
})

const getImg = (img) => {
    return img.replace('{width}x{height}', '1000x500')
}



</script>
