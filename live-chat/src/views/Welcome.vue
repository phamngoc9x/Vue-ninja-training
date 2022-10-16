<template>
  <div class="welcome container">
    <h1>Welcome my love</h1>
    <div v-if="showLogin">
      <h2>Login</h2>
      <login-form @login="enterChat" />
      <div class="signup-link">
        No account yet? <span @click="showLogin= !showLogin" class="text-blue">Signup</span> instead
      </div>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <signup-form @signup="enterChat" />
      <div class="signup-link">
        Already registered <span @click="showLogin=!showLogin" class="text-blue">Login</span> instead
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import { useRouter } from 'vue-router';

export default {
  components: { SignupForm, LoginForm },

  setup() {
    const router = useRouter()
    const showLogin = ref(true)

    const enterChat = () => {
      router.push({ name: 'Chatroom'})
      console.log('test router', router)
    }
    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }

  .signup-link {
    cursor: pointer;
  }

  .text-blue {
    color: #5ae4ca;
    font-weight: bold;
  }

   /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #333;
    margin: 10px auto;
  }
</style>