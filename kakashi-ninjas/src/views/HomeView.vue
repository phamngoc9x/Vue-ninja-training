<template>
  <div class="home">
    <div v-if="documents">
      <list-view :characters="documents" />
    </div>
    <div v-if="error">This is error</div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import ListView from '../components/ListView.vue';

export default {
  name: 'HomeView',
  components: {
    ListView
  },

  setup() {
    const { documents, error } = getCollection('characters')
    console.log('documents', documents)
    console.log('error', error.value)


    return { documents, error }
  }
}
</script>
