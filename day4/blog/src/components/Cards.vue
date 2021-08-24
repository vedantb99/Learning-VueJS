<template>
  <div class="container">
    <div class="row">
      <div v-for="blog in allBlogs" :key="blog.author" class="col">
        <b-card
          :title="blog.title"
          img-src="https://picsum.photos/600/300/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem"
          class="mb-2"
        >
          <!-- <b-card-title>
      {{blog.title}}
  </b-card-title> -->
          <b-card-text>
            {{ blog.description }}
          </b-card-text>

          <b-button
            class="mr-2"
            :href="blog.link"
            target="_blank"
            variant="primary"
            >Visit Blog</b-button
          >
          <hr>
          <label style="color:purple;">Click to like</label>
          <br>
          <b-button class="mr-2" v-on:click="blog.count += 1" variant="primary"
            >Likes:{{ blog.count }}</b-button
          >
        </b-card>
      </div>
    </div>
    <!-- End of row -->
  </div>
</template>
<script>
export default {
  name: 'Cards',
  props: ['allBlogs']
  // data () {
  //   return {
  //     blogs: this.allBlogs
  //   }
}

// data () {
//   return {
//     blogs
//   }
//   data () {
//     return {
//       counter1: 0,
//       counter2: 0,
//       counter3: 0,
//       counter4: 0
//     }
</script>
