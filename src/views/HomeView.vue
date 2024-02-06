<script setup>
import {ref, onMounted, useAttrs, defineAsyncComponent} from 'vue'

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

const attrs = useAttrs()
const currentDomain = attrs.domain





onMounted(() => {
 //AsyncComponent()
 const AsyncComponent = defineAsyncComponent(() => import('../components/gamingonlinestore.com/StreamView.vue'))
})
</script>

<template>
    <div class="site-wrapper gos">
        <IndexPage></IndexPage>
    </div>
</template>

<style lang="scss" scoped>

</style>
