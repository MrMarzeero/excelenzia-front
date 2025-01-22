<template>
  <div id="app">
    <header>
      <HeaderView />
    </header>

    <main>
      <router-view></router-view> 
    </main>

  </div>
</template>

<script setup>
  import HeaderView from './components/HeaderView.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}

</style>

