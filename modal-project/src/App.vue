<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <ModalApp @close="toggleModal" theme="sale">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
      <h1>Sign up for the Giveaway!</h1>
      <p>The content text test !</p>
    </ModalApp>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <ModalApp @close="toggleModal2">
      <h1>Sign up for modal 2!</h1>
      <p>The content text test !</p>
    </ModalApp>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModal2">Open Modal 2</button>
</template>

<script>
import ModalApp from './components/ModalApp.vue'

export default {
  name: 'App',
  components: { ModalApp },

  data () {
    return {
      title: 'My first vue app!!1',
      header: 'Sign up for the Giveaway!1',
      text: 'The content text test !!1!',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active')
    },
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleModal2 () {
      console.log('abc')
      this.showModalTwo = !this.showModalTwo
      console.log(this.showModalTwo)
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
