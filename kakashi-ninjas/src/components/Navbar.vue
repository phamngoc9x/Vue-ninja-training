<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="ninja">
      <h1> <router-link :to="{ name : 'home'}">Kakashi Ninjas</router-link> </h1>
      <div class="links">
        <div class="inline" v-if="!user">
          <router-link class="btn" :to="{ name: 'Signup'}">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login'}">Login</router-link>
        </div>
        <div v-else class="inline">
          <button @click="handleLogout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { logout, error } = useLogout()
    const router = useRouter()

    const { user } = getUser()

    const handleLogout = async () => {
      await logout()

      if(!error.message) {
        console.log('Logout success')
      }
      router.push({name: 'Login'})
    }
    return { error, handleLogout, user }
  }
}
</script>

<style scoped lang="scss">
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background-color: white;
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;

    h1 {
      margin-left: 20px;
    }

    .links {
      margin-left: auto;

      a {
        margin-left: 14px;
        font-size: 14px;
      }
    }

    img {
      max-height: 50px;
    }
  }

  button {
    margin-left: 14px;
    font-size: 14px;
  }

  .inline {
    display: inline-block;
  }
</style>