<script lang="ts">
  import Navbar from '../components/Navbar.vue';
  import TabList from '../components/TabList.vue';

  export default {
    name: 'MainLayout',
    components: {
      Navbar, TabList
    }
  }
</script>

<template>
  <Navbar></Navbar>
  <TabList />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.main-wrapper {
  margin: .5rem 4rem;
}
</style>