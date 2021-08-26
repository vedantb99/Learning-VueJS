<template>
  <div class="about">
    <h3>LeaderBoard</h3>
      <LeaderBoard :blogs="allBlogs"/>

  </div>
</template>
<style scoped>
h3 {
  margin: 40px 0 0;
  color:#107896;
}
</style>
<script>
import LeaderBoard from '@/components/LeaderBoard.vue'

export default {
  components: {
    LeaderBoard
  }

}
</script>
