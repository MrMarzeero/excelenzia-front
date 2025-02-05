<script lang="ts">
import { useUserStore } from '../../stores/userStore';

  export default {
    name: 'Dashboard',
    setup() {
      const userStore = useUserStore();

      return {username: userStore.user?.username}
    }
  }
</script>

<template>
  <div class="profile">
    <img src="../../assets/images/pfp.jpg" alt="profile pic" />
    <div class="profile-info">
      <h2>{{ username }}</h2>
      <p>Level: 8000+</p>
    </div>
  </div>
  <div class="dashboard-wrapper">
    <div class="main-content">

      <div class="pf-statistics">
        <span>Exercicios resolvidos: 3</span>
        <span>Competições: 0</span>
        <span>Posição no ranking: 23</span>
      </div>
    </div>
    <div class="graph-wrapper">
      <h1 class="title">Estatisticas</h1>

    </div>
  </div>
</template>

<style scoped>
  .dashboard-wrapper {
    width: 100%;
    height: calc(80vh - 10rem);
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
  }

  .dashboard-wrapper > div {
    background-color: var(--blue-600);
  }

  .main-content {
    width: 60%;
    border-radius: 2rem .5rem .5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  .pf-statistics {
    height: 100%;
    border-radius: 2rem;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--blue-500);
  }

  .graph-wrapper {
    width: 40%;
    border-radius: .5rem 2rem 2rem .5rem;
    padding: 2rem;
  }
  .graph-wrapper > .title {
    font-size: 1.2rem;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .profile > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>