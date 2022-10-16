<template>
  <div class="container">
    <navbar @logout="handleLogout" />
    <chat-window />
    <new-chat-form />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '@/Composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        router.push({name: 'Welcome'})
      }
    })
    const handleLogout = () => {
      console.log('user', user)
    }

    return {user, handleLogout}
  }
}
</script>

<style lang="scss">
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 2px auto;
      font-size: 16px;
      color: #444;

      &.email {
        font-size: 14px;
        color: #999;
      }
    }
  }
  
</style>