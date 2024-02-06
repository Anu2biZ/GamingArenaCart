<script setup>
import StreamView from '../components/gamingonlinestore.com/StreamView.vue'

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
        <StreamView></StreamView>
    </div>
</template>

<style lang="scss" scoped>

</style>
