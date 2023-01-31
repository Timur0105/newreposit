<template>
  <Navbar/>
  <router-view/>
</template>
<script>
import Navbar from '@/components/Sections/Navbar/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>