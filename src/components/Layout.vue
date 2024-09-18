<template>
<Navber/>
  <main>
    <slot/>
  </main>
<Footer/>
</template>

<script setup>
import Navber from "./layout/Navber.vue";
import Footer from "./layout/Footer.vue";


</script>

<style scoped>

</style>