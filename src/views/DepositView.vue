<script setup>
import DepositPage from '../components/gamingonlinestore.com/DepositPage.vue'

import { ref, onMounted } from 'vue'
const isCssLoaded = ref(false)
onMounted(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'style.min.css'
    link.onload = () => {
        isCssLoaded.value = true
    }
    document.head.appendChild(link)
})
</script>

<template>
    <div class="site-wrapper gos">
        <DepositPage></DepositPage>
    </div>
</template>

<style lang="scss" scoped>

</style>
