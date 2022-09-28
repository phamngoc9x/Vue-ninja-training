<template>
  <div class="backdrop" @click.self="handleClose">
    <div class="modal" :class="{sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background-color: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  h1 {
    color: aqua;
  }
  .sale {
    background-color: crimson;
  }
  .sale h1, .sale p {
    color: white;
  }
</style>
