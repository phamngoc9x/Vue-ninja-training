<template>
  <div v-if="isAuthenticated" class="status-bar">
    <p>Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'StatusBar',
  computed: {...mapGetters(['doneTodos', 'isAuthenticated']), ...mapState(['auth'])}
}
</script>

<style>
.status-bar {
  padding: 5px;
  background: rgb(240, 240, 240);
  color: black;
}
</style>