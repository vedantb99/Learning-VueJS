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
        },
        {
          key: 'title',
          sortable: false
        }
      ]
    }
  }
}

</script>
