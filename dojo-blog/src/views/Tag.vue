<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <post-list :posts="postCurrentTag" />
      <tag-cloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '@/composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'
import Spinner from '@/components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  components: { PostList, Spinner, TagCloud },

  setup() {
    const {posts, error, load } = getPosts()
    const route = useRoute()

    const postCurrentTag = computed( () => {
      return posts.value.filter(post => post.tags.includes(route.params.tag))
    })

    load()
    return { posts, error, postCurrentTag }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>