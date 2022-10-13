<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <p class="error">{{ error }}</p>
    <button>Login</button>
  </form>
</template>

<script>
import useLogin from '@/Composables/useLogin';
import { ref } from 'vue';

export default {
  setup() {

    const {error, login} = useLogin()
    //refs
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if(!error.value) {
        console.log('user logged in');
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>