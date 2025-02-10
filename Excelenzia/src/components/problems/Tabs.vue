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
  </ul>
</div>
</template>

<style scoped>
* {
  list-style: none;
}

.tabs > ul {
  display: flex;
  gap: 2rem;
}
.tabs > ul > li > a {
  padding: .5rem 1rem;
  border-radius: 2rem;
  opacity: .8;
  transition: opacity .2s ease-in;
  background-color: #021C40;
}
.tabs > ul > li > a:hover {
  opacity: 1;
}
.tabs > ul > li > .router-link-exact-active {
  opacity: 1;
  background-color: #174D98;
}
</style>