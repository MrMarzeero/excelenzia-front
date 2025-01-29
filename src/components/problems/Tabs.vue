<script lang="ts">
export default {
  name: 'Tabs',
}
</script>

<template>
<div class="tabs">
  <ul>
    <li><RouterLink to="/problems/generate">Descrição</RouterLink></li>
    <li><RouterLink to="/problems/solve">Resolver</RouterLink></li>
    <li><RouterLink to="/problems/testcases">Testes</RouterLink></li>
  </ul>
</div>
</template>

<style scoped>
.tabs > ul {
  display: flex;
  gap: 2rem;
}
.tabs > ul > li > a {
  padding: .5rem 1rem;
  border-radius: 2rem;
  opacity: .8;
  transition: opacity .2s ease-in;
  background-color: var(--blue-800);
}
.tabs > ul > li > a:hover {
  opacity: 1;
}
.tabs > ul > li > .router-link-exact-active {
  opacity: 1;
  background-color: var(--primary);
}
</style>