<script lang="ts">

export default {
  name: 'Cloud'
}
</script>
<template>
  <div class="cloud">
    <img src="../assets/cloud.svg" alt="Decorative cloud image">
    <img src="../assets/cloud.svg" alt="Decorative cloud image">
  </div>
</template>

<style scoped>
  .cloud {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
  }
  .cloud > img{
    width: 60vw;
    height: 400px;
    transition: transform 0.5s ease-in-out;
    pointer-events: none;
    user-select: none;
  }
  .cloud > img:nth-child(2) {
    transform: scaleX(-1) translateX(30%);
  }
</style>