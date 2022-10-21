<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Signup</button>
    <button v-if="isPending">Loading</button>
  </form>
</template>

<script>
import useSignup from '@/composables/useSignup'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const { signup, error, isPending } = useSignup()
    const handleSubmit = async () => {
      const res = await signup(displayName.value, email.value, password.value)

      if(!error.value) {
        router.push({name: 'UserCharacters'})
      }
    }

    return { displayName, email, password, error, isPending, handleSubmit }
  }
}
</script>

<style>

</style>