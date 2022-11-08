<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>

    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line 
  name:'Navbar',
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