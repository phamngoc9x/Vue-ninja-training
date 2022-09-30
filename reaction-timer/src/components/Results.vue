<template>
  <div>
    <br>
    Reaction time: {{ time }} ms
    <br>
    <p class="rank">{{ rank}}</p>
  </div>
 
</template>

<script>
export default {
  props: ['time'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if(this.time < 250) {
      this.rank = 'Ninja Fingers'
    } else if (this.time < 400) {
      this.rank = 'Rapid Reflexes'
    } else {
      this.rank = 'Snail pace ...'
    }
  }
}
</script>

<style scoped>
  .rank {
    font-size: 1.4em;
    color: #0faf97;
    font-weight: bold;
  }
</style>
 