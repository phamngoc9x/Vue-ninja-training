<template>
  <div class="home">
    Home
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">
        <p>{{ doc.title }}</p>
      </div>
    </div>
    <div v-if="error"> this is error</div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';

export default {
  name: 'HomeView',
  components: {
  },

  setup() {
    const { documents, error } = getCollection('skilllists')
    console.log('documents', documents)
    console.log('error', error.value)


    return { documents, error }
  }
}
</script>
