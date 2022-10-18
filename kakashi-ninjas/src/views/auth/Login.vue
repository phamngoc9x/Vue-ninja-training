<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Login</button>
    <button v-if="isPending">Loading</button>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const { login, error, isPending } = useLogin()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if(!error.value) {
        console.log('this is login ', res);
        router.push({name: 'home'})
      }
    }

    return { email, password, error, handleSubmit, isPending } 
  }
}
</script>

<style>

</style>