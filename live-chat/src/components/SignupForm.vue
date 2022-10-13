<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="text" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <p class="error"> {{ error }}</p>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../Composables/useSignup'

export default {
  setup() {
    const { error, signup } = useSignup()
    //refs

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log('user signed up', error)
    } 

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>