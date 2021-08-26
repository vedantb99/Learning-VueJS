<template>
  <div class="container">
    <div class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col">
        <b-card
          :title="blog.title"
          img-src="https://picsum.photos/600/300/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem"
          class="mb-2"
        >
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
          <hr />
          <label style="color: purple">Click to like</label>
          <br />

          <b-button
            class="mr-2"
            v-on:click="incrementLikes(blog.id)"
            variant="primary"
            >Likes:{{ blog.count }}</b-button
          >
        </b-card>
      </div>
    </div>
    <!-- End of row -->
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    blogs: (state) => state.blogs
    // count: state => getCount(state.blog[author])
  }),
  methods: {
    incrementLikes (id) {
      this.$store.commit('increment', id)
    }
  }
}
</script>
