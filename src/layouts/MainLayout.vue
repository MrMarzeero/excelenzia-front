<script>
  import Navbar from '../components/EXNavBar.vue';

  export default {
    name: 'MainLayout',
    components: {
      Navbar,
    }
  }
</script>

<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>