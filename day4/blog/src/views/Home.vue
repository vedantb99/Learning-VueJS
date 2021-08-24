<template>
  <div class="home">
 <!-- <img src="../assets/blogIm.jpeg" class="d-block w-100" alt="Blog"> -->
<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="../assets/blogIm.jpeg"></b-carousel-slide>
    <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/blog2.png"
            alt="image slot"
          >
                  </template>

                </b-carousel-slide>
    </b-carousel>
         <!-- Carousal is closed here -->
<HelloWorld msg="Below are the Best Blogs of the Day"/>
<Cards :allBlogs="allBlogs"/>
   <div class="container">

  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cards from '@/components/Cards.vue'
export default {
  name: 'Home',
  props: ['allBlogs'],
  components: {
    HelloWorld,
    Cards
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
