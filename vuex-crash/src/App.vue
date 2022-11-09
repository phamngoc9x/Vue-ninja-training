<template>
  <div id="app">
    <Navbar />
    <TodoList />
    <StatusBar />
    <ProgressBar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ProgressBar from './components/ProgressBar.vue'
import StatusBar from './components/StatusBar.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: { TodoList, Navbar, StatusBar, ProgressBar },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
