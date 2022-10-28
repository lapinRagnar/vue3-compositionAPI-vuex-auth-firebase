<template>
  <div class="container">
    <Navbar />
    Bonjour
    <router-view/>
  </div>
</template>

<script>
// import Navbar from './components/Navbar'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {Navbar}
}
</script>