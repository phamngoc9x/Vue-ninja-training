<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }},</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../Composables/useLogout.js'
import getUser from '@/Composables/getUser'
export default {
  setup( props, context) {
    const { error, logout } = useLogout()
    const { user } = getUser()

    const handleLogout = async () => {
      await logout()
      console.log('logout')

      if(!error.value) {
        context.emit('logout')
      }
    }
    return { error, handleLogout, user }
  }

}
</script>

<style>

</style>