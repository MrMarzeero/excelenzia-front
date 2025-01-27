<script lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../stores/userStore';

  export default {
    name: 'Profile',
    setup() {
      const userStore = useUserStore();

      const isAuthenticated = computed(() => userStore.isAuthenticated);

      return { isAuthenticated }
    }
  }
</script>

<template>
  <div class="profile">
      <img v-if="isAuthenticated" src="https://api.neps.academy/image/user-profile/1.png" alt="Profile Picture">
      <div v-else class="btns" >
        <button><RouterLink to="/login">Login</RouterLink></button>
        <button><RouterLink to="/sign-in">Sign up</RouterLink></button>
      </div>
    </div>
</template>

<style>
.profile {
    margin-right: 20px;
  }
  .profile > img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .btns {
    display: flex;
    gap: .5rem;
  }

  .btns > button {
    border: none;
    padding: .6rem .7rem;
    border-radius: 2rem;
    cursor: pointer;
  }
  .btns > button:nth-child(1) {
    background: none;
    border: solid 2px #7a7a7a;
    opacity: .8;
    transition: opacity .2s ease-in;
  }
  .btns > button:nth-child(1):hover {
    opacity: 1;
  }
</style>