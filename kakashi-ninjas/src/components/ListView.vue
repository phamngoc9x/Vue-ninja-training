<template>
  <div>
    <div v-for="item in characters" :key="item.id">
      <router-link :to="{ name: 'CharactersDetails', params: {id: item.id} }">
        <div class="single">
          <div class="thumbnail">
            <img :src="item.coverUrl" :alt="item.title">
          </div>
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p>Created by {{ item.userName }}</p>
          </div>
          <div class="skill-number">
            <p>{{ item.skills.length }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['characters']
}
</script>

<style lang="scss" scoped>
   .single {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: white;
    margin: 16px 0;
    transition: all ease 0.2s;
  
    &:hover {
      box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
      transform: scale(1.02);
      transition: all ease 0.2s;
    }
  }
  .thumbnail {
    max-width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 10px;
  }

  img {
    max-width: 150%;
    max-height: 150%;
    display: block;
  }
  .info {
    margin: 0 30px;
  }
  .skill-number {
    margin-left: auto;
  }
</style>