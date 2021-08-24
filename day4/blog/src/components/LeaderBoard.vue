<template>
  <div id="app">
<b-table striped hover :items="allBlogs" :fields="fields"
:sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"

></b-table>
<!-- <p>{{blogs[1]}}</p> -->
    </div>
</template>
<script>
// import Cards from '@/components/Cards.vue'

export default {
  name: 'LeaderBoard',
  //   components: {
  //     Cards

  //   },
  props: ['allBlogs'],
  data () {
    return {
      sortBy: 'count',
      sortDesc: true,
      fields: [
        {
          key: 'count',
          sortable: true
        },
        {
          key: 'author',
          sortable: false
        }
      ]
    }
  }
  //   data () {
  //     return {
  //       blogs: [
  //         {
  //           title: 'SoundStream: An End-to-End Neural Audio Codec',
  //           author: 'Neil Zeghidour',
  //           description: 'Audio codecs are used to efficiently compress audio to reduce either storage requirements or network bandwidth. Ideally, audio codecs should be transparent',
  //           count: 0,
  //           link: 'https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html'

  //         },
  //         {
  //           title: 'What Are The Pros And Cons Of Using Vue.js',
  //           author: 'Iryna Vasiutynska',
  //           description: 'Vue.js is a well-known term in the development of state-of-the-art web applications',
  //           count: 0,
  //           link: 'https://towardsdatascience.com/what-are-the-pros-and-cons-of-using-vue-js-3689d00d87b0'

  //         },
  //         {
  //           title: 'What Are The Pros And Cons Of Using Bootstrap',
  //           author: 'Jatin Sharma',
  //           description: 'Now, frameworks may save you a bunch load of time that you would usually spend in coding. But it restricts your crea',
  //           count: 0,
  //           link: 'https://www.uplers.com/blog/what-are-the-pros-cons-of-foundation-and-bootstrap/#:~:text=The%20Advantages%20of%20Bootstrap%20Development%20are%3A&text=A%20consistent%20framework%20that%20supports,JavaScript%20plugins%20using%20the%20jQuery'

  //         },
  //         {
  //           title: 'Bootstrap: Pros and Cons',
  //           author: 'Aryan Samaja',
  //           description: 'Bootstrap is a well-known term in the development of state-of-th',
  //           count: 0,
  //           link: 'https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html'

//         }
//       ]
  // }
}

</script>
