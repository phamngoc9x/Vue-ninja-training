<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="charactersDetails" class="characters-details">
      
      <!-- characters info -->
      <div class="characters-info">
        <div class="cover">
          <img :src="charactersDetails.coverUrl">
        </div>
        <h2>{{ charactersDetails.title }}</h2>
        <p class="username">Created by <b>{{ charactersDetails.userName }}</b></p>
        <p class="description">{{ charactersDetails.description }}</p>
        <button v-if="ownership" @click="handleDelete">Delete Characters</button>
      </div>

      <!-- Skill -->
      <div class="skills-list">
        <div v-if="!charactersDetails.skills.length">No skills have been added to this characters yet.</div>
        <div v-for="skill in charactersDetails.skills" :key="skill.id" class="single-skills">
          <div class="details">
            <h3>{{ skill.title}}</h3>
            <p>Created by: {{ skill.createdBy}}</p>
          </div>
          <button v-if="ownership" @click="handleClick(skill.id)">Delete</button>
        </div>
        <add-skills v-if="ownership" :charactersDetails="charactersDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from '@/composables/getDocument';
import useDocument from '@/composables/useDocument';
import getUser from '@/composables/getUser';
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import useStorage from '@/composables/useStorage';
import AddSkills from '../../components/AddSkills.vue';

export default {
  components: { AddSkills },
  props: ['id'],
  setup(props) {
    const { document: charactersDetails , error } = getDocument('characters', props.id)
    const { user } = getUser()
    const router = useRouter()
    const { deleteDoc, updateDoc } = useDocument('characters', props.id)
    const { deleteImage } = useStorage()

    const ownership = computed(() => {
      return charactersDetails.value && user.value && user.value.uid == charactersDetails.value.userId
    })

    const handleDelete = async () => {

      await deleteDoc()
      await deleteImage(charactersDetails.value.filePath)
      router.push({ name: 'home' })
    }

    const handleClick = async (id) => {
      const res = charactersDetails.value.skills.filter(item => 
        item.id != id
      )
      await updateDoc({
        skills: res
      })
    }
  
    return { charactersDetails, error, ownership, handleDelete, handleClick }
  }
}
</script>

<style>
  .characters-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }
  .cover {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
  }
  .cover img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: auto;
  }
  .characters-info {
    text-align: center;
  }
  .characters-info h2 {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
  }
  .characters-info p {
    margin-bottom: 20px;
  }
  .username {
    color: #999;
  }
  .description {
    text-align: left;
  }
  .single-skills {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed var(--secondary);
    margin-bottom: 20px;
  }
</style>