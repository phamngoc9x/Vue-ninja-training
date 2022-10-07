<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
       <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      url: 'http://localhost:3000/projects/',
      current: 'all',
      dataFilter: []
    }
  },

  methods: {
    fetchData() {
      fetch(this.url)
      .then(res => res.json())
      .then(data => {this.projects = data,
        this.dataFilter = data
      })
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

  computed: {
    filteredProjects() {
      if(this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete )
      }
      return this.projects
    }
  },

  // watch: {
  //   current: function () {
  //     if(this.current === 'ongoing') {
  //       this.dataFilter = this.projects.filter(project => !project.complete)
  //     } else if (this.current === 'completed') {
  //       this.dataFilter = this.projects.filter(project => project.complete )
  //     }
  //     else {
  //       this.dataFilter = this.projects
  //     }
  //   }
  // },
  
  mounted() {
    this.fetchData()
  }
}
</script>
