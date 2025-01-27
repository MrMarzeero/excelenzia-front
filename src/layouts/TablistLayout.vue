<script>
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
  <div class="main-wrapper">
    <TabList />
    <RouterView />
  </div>
</template>

<style scoped>
.main-wrapper {
  margin: .5rem 4rem;
}
</style>