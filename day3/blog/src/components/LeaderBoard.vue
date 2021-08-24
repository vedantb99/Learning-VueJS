<template>
  <div id="app">
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Likes</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
         <!-- <tr v-for="product in sortedProducts" :key="product.id"> -->
         <tr v-for="product in products" :key="product.id">
    <td>{{product.name}}</td>
    <td>{{product.price}}</td>
    <td>{{product.category}}</td>
         </tr>
        <!-- <tr>
          <td></td>
          <td>adadsasdprice}}</td>
          <td>adadsasdcategory}}</td>
        </tr>
        <tr>
          <td>adadsasdname}}</td>
          <td>adadsasdprice}}</td>
          <td>adadsasdcategory}}</td>
        </tr> -->
      </tbody>
    </table>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'LeaderBoard',

  data () {
    return {
      products: [
        { name: 'Keyboard', price: 44, category: 'Accessories' },
        { name: 'Mouse', price: 20, category: 'Accessories' },
        { name: 'Monitor', price: 399, category: 'Accessories' },
        { name: 'Dell XPS', price: 599, category: 'Laptop' }
        // { name: 'MacBook Pro', price: 899, category: 'Laptop' },
        // { name: 'Pencil Box', price: 6, category: 'Stationary' },
        // { name: 'Pen', price: 2, category: 'Stationary' },
        // { name: 'USB Cable', price: 7, category: 'Accessories' },
        // { name: 'Eraser', price: 2, category: 'Stationary' },
        // { name: 'Highlighter', price: 5, category: 'Stationary' }
      ]
    }
  }
}
</script>
