<template>
  <div class="projects" :class="{ complete: project.complete}">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name:'EditProject', params: {id: project.id} }">
          <span class="material-symbols-outlined">
            Edit
          </span>
        </router-link>
        <span class="material-symbols-outlined" @click="deleteProject(project.id)">
          delete
        </span>
        <span class="material-symbols-outlined tick" @click="toggleComplete(project)">
          done
        </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    deleteProject(value) {
      this.$emit('delete', value)
    },
    toggleComplete(value) {
      this.$emit('complete', value)
    },
  }
}
</script>

<style>
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .projects.complete {
    border-color: #00ce89;
  }
  .projects.complete .tick {
    color: #00ce89;
  }

  .projects {
    margin: 20px auto;
    background-color: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #e90074;
  }

  h3 {
    cursor: pointer;
  }

  .material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }

  .material-symbols-outlined:hover {
    color: #777;
  }

</style>