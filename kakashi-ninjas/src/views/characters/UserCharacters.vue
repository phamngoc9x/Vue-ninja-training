<template>
  <div class="user-characters">
    <h2>My characters</h2>
    <div v-if="documents">
      <list-view :characters="documents" />
    </div>
    <router-link :to="{ name: 'CreateCharacters'}" class="btn mt-10">Create a new Characters</router-link>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import ListView from '@/components/ListView.vue';

export default {
    setup() {
        const { user } = getUser();
        console.log("user,user", user);
        const { documents } = getCollection('characters', ['userId', '==', user.value.uid]);
        console.log('documents', documents)
        return { documents }
    },
    components: { ListView }
}
</script>

<style>

.mt-10 {
  margin-top: 10px;
}

</style>