<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="isAuthenticated">Total todos: 
        {{ todos.length }}
        <button @click="TOGGLE_AUTH">Logout</button>
      </li>
      <li v-else>
        <button @click="TOGGLE_AUTH">Login</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  // eslint-disable-next-line 
  name:'Navbar',
  computed : { ...mapState(['todos']), ...mapGetters(['isAuthenticated'])},
  methods: mapMutations(['TOGGLE_AUTH'])
}
</script>

<style>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}

.navbar ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 padding: 0;
}

</style>