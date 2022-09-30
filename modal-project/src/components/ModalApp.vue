<template>
  <div class="backdrop" @click.self="handleClose">
    <div class="modal" :class="{sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
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
<style>
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
    cursor: pointer;
  }
  .modal h1 {
    color: aqua;
  }
  .sale {
    background-color: crimson;
  }
  .sale h1, .sale p {
    color: white;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  .sale .actions a {
    color: white;
  }
</style>
