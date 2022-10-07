<template>
   <form @submit.prevent="handleEdit">
    <label>Title: </label>
    <input v-model="title" type="text" required>
    <label>Details: </label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      url: 'http://localhost:3000/projects/'
    }
  },
  mounted() {
    fetch(this.url + this.id)
    .then(res => res.json())
    .then(data => {
      this.title = data.title
      this.details = data.details
    })
    .catch(err => console.log(err.message))
  },
  methods: {
    handleEdit() {
      fetch(this.url + this.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.title,
          details: this.details
        })
      })
      .then(()=> {
        this.$router.push('/')
      })
      .catch(err => console.log(err.message))
      
    }
  }
}
</script>

<style>

</style>