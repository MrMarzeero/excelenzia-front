<script lang="ts">
import { useUserStore } from '../../../stores/userStore';

export default {
  name: 'SignUp',
  data(){
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods:{
    handleSignUp() {
      const userStore = useUserStore();

      userStore.login({
        email: this.email,
        username: this.username,
        id: '123',
      })
    }
  }
}
</script>

<template>
  <div class="center-wrapper">
    <div class="sign-up-form">
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignUp">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<style>
.center-wrapper {
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up-form {
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5rem;
  background-color: #303057;
  gap: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

form > button {
  width: max-content;
  padding: .5rem;
  border: none;
  background-color: #4444EC;
}
form > input {
  all: unset;
  border: none;
  padding: .5rem;
  background-color: #6B6B6B;
  border-radius: 2rem;
  color: white;
}
form > input::placeholder {
  color: white;
}

</style>