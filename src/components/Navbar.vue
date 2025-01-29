<script lang="ts">
export default {
  name: 'Navbar'
}
</script>
<template>
  <header>
    <h1>Excelenz</h1><h1 class="secondary">IA</h1>
    <img class="star-logo-img" src="../assets/images/star-removebg-preview.png" alt="star">
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background-color: var(--blue-600);
}
header > h1 {
  color: #D3E7F8;
  font-size: 2rem;
  padding: 1rem 0px 10px 20px;
  font-weight: 800;
}
.secondary {
  color: #6BBEDC;
  padding: 1rem 0px 10px 0px;
}

.star-logo-img {
  width: 2rem;
  height: 3rem;
  margin: 2px 0px 0px 5px;
  object-fit: cover; 
}

</style>