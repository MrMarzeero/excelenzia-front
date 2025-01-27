<script lang="ts">
  export default {
    name: 'TabList'
  }
</script>

<template>
  <div class="tablist">
    <ul>
      <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
      <li><RouterLink to="/problems/generate" :class="{ active: $route.path.startsWith('/problems') }">Gere um problema</RouterLink></li>
      <li><RouterLink to="/problems">Exercicios</RouterLink></li>
      <li><RouterLink to="/contests">Calendário de competições</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
  div {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: .5rem 2rem;
    border-radius: 2rem;
    background-color: var(--blue-600);
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  li > a {
    opacity: .8;
    transition: opacity .2s ease-in;
  }
  li > a:hover {
    opacity: 1;
  }
  
  .router-link-exact-active, .active {
    opacity: 1;
    font-weight: bold;
  }
</style>