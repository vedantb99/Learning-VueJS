<template>
  <div id="app">
    <b-table
      striped
      hover
      :items="sorting"
      fields="fields"
>
</b-table>
    <!-- {{sorting}} -->
  </div>
</template>
<script>
// import Cards from '@/components/Cards.vue'

// export default {
//   name: 'LeaderBoard',
//   props: ['allBlogs'],
//   data () {
//     return {
//       sortBy: 'count',
//       sortDesc: true,
//       fields: [
//         {
//           key: 'count',
//           sortable: true
//         },
//         {
//           key: 'author',
//           sortable: false
//         },
//         {
//           key: 'title',
//           sortable: false
//         }
//       ]
//     }
//   }
// }
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      blogs: (state) => state.blogs,
      fields: ['state.blogs.count']

    }),
    ...mapGetters(['sorting']) // fields: {'blogs.count'}

  }
//   data () {
//     return {
//       sortBy: 'count',
//       sortDesc: true,
//       fields: [
//         {
//           key: 'count',
//           sortable: true
//         },
//         {
//           key: 'author',
//           sortable: false
//         },
//         {
//           key: 'title',
//           sortable: false
//         }
//       ]
//     }
//   }
}
</script>
