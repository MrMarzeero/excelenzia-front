<script lang="ts">
  import TabList from '../components/TabList.vue';

  export default {
    name: 'MainLayout',
    components: {
      TabList
    }
  }
</script>

<template>
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