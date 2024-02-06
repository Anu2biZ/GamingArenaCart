<template>
    <div class="footer">
        <div class="menu">
            <a class="open-privacy-policy" @click="openPrivacy">Privacy Policy</a>
            <a class="open-cookie-policy" @click="openCookie">Cookies Policy</a>
            <a class="open-terms" @click="openTerms">Terms and Conditions</a>
            <a href="mailto:info@gamingonlinestore.com" target="_blank">Contact Us</a>
        </div>
        <div class="pay"><img src="../../../assets/images/gamingonlinestore/visa.png"><img
                src="../../../assets/images/gamingonlinestore/mastercard.png"><img
                src="../../../assets/images/gamingonlinestore/pci.png"></div>
        <div class="copyright">
            Copyright © 2023 My Delivery LTD
            <br>
            Powered by Steam (registered trademark of Valve Corporation)
            <br>
            Reg. No. 13010969
            <br>
            Legal address: 46 St. Leonards Road, Northhampton, England, NN4 8DP
            <br>
            Office address: 1 Clark Close, Erith, England, DA8 2PB
            <br>
            info@gamingonlinestore.com
            <br>
            <br>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

const openPrivacy = () => {
    store.dispatch('openModal', 'isOpenModalPrivacyPolicy')
}
const openCookie = () => {
    store.dispatch('openModal', 'isOpenModalCookiePolicy')
}

const openTerms = () => {
    store.dispatch('openModal', 'isOpenModalTerms')
}
</script>