<template>
  <div class="welcome container">
    <p>welcome</p>
    <div v-if="!showLogin">
      <h2>Login</h2>
      <login-form />
      <div class="signup-link">
        No account yet? <span @click="showLogin= !showLogin" class="text-blue">Signup</span> instead
      </div>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <signup-form />
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

export default {
  components: { SignupForm, LoginForm },

  setup() {
    const showLogin = ref(true)
    return { showLogin }
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