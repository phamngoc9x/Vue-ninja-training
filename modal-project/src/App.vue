<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <ModalApp :header="header" :text="text" @close="toggleModal" theme="sale" />
  </div>
  <button @click="toggleModal">Open Modal</button>
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
      showModal: false
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active')
    },
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
