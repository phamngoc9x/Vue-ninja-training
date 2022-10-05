<template>
  <div>
    <h1>Job Details Page</h1>
    <div v-if="job">
      <h1>The Job title is {{ job.title }}</h1>
      <p>The Job id is {{ job.id }}</p>
      <p>The Job detail is {{ job.details }}</p>
    </div>
    <div v-else>
      <p>loading job detail</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>