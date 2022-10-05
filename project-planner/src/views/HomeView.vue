<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
       <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { SingleProject },
  data() {
    return {
      projects: [],
      url: 'http://localhost:3000/prrojects/'
    }
  },

  methods: {
    fetchData() {
      fetch(this.url)
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
    },
    handleDelete(id) {
      fetch(this.url + id, {method: 'DELETE'})
      .catch(err => console.log(err.message))
      this.projects = this.projects.filter(project => {
        return project.id !== id
      })
    },
    handleComplete(project) {
      fetch(this.url + project.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          complete: !project.complete
        })
      })
      .catch(err => console.log(err.message))
      let p = this.projects.find(item => {
        return item.id === project.id
      })
      p.complete = !p.complete
    }
  },
  
  mounted() {
    this.fetchData()
  }
}
</script>
