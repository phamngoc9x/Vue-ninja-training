<template>
  <div>
    <h1>Real time data</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config';
import { ref } from '@vue/reactivity'
import PostList from '@/components/PostList.vue';
export default {
    setup() {
        const posts = ref([]);
        projectFirestore.collection("posts")
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
            let docs = snap.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
            console.log("document", docs);
            posts.value = docs;
        });
        return { posts };
    },
    components: { PostList }
}
</script>

<style>

</style>