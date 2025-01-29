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
  background-color: var(--blue-600);
  display: flex;
  align-items: center;
}

ul {
  padding: 2rem;
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

li > a::after {
  content: '';
  position: absolute;
  bottom: -0.6rem; 
  left: 0;
  width: 0; 
  height: 0.1rem;
  background-color: #ffffff;
  transition: all 0.3s ease; 
}
.li > a:hover {
  color: #c9d7e2;
  transition: 0.3s;
}

.router-link-active::after {
  width: 100%; 
}
  
.router-link-exact-active, .active {
  opacity: 1;
  font-weight: bold;
  color: white;
  transition: 0.5s;
}
</style>