<script setup>
import { onMounted, ref} from "vue";
import {RouterView} from 'vue-router'
const domain = ref('')

onMounted(() => {
  // domain.value = window.location.host
  domain.value = 'gamingonlinestore.com'
})

</script>

<template>

  {{ domain}}
  <!--    <div class="loader">-->
  <!--        <div class="lds-ripple">-->
  <!--            <div></div>-->
  <!--            <div></div>-->
  <!--        </div>-->
  <!--    </div>-->
    <div class="main-wrapper">
        <RouterView :domain="domain" />
    </div>
</template>

<style scoped>

</style>
