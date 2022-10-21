<template>
  <div class="add-skills">
    <button v-if="!showForm" @click="showForm = true">Add Skills</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add new skills</h4>
      <input type="text" placeholder="Skill title" required v-model="title">
      <input type="text" placeholder="Created by " required v-model="createdBy">
      <p v-if="error" class="error">{{ error }}</p>
      <button v-if="!isPending">Add</button>
      <button v-if="isPending" disabled>Adding</button>
    </form>
  </div>
</template>

<script>
import useDocument from '@/composables/useDocument'
import { ref } from '@vue/reactivity'
export default {
  props: ['charactersDetails'],
  setup(props) {
    const title = ref('')
    const createdBy = ref('')
    const showForm = ref(false)
    const { updateDoc, isPending, error } = useDocument('characters', props.charactersDetails.id)

    const handleSubmit = async () => {
      isPending.value = true
      const newSkills = {
        title: title.value,
        createdBy: createdBy.value,
        id: Math.floor(Math.random() * 1000000)
      }

      await updateDoc({
        skills: [...props.charactersDetails.skills, newSkills]
      })

      title.value = ''
      createdBy.value = ''
      if(!error.value) {
        isPending.value = false
      }
    }

    return { title, createdBy, showForm, handleSubmit, error, isPending}
  }
}
</script>

<style>
  .add-skills {
    margin-top: 40px;
    text-align: center;
  }

  form {
    max-width: 100%;;
    text-align: left;
  }
</style>