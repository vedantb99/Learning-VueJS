<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
<HiCounter/>
<list-rendering/>
    <!-- <div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div> -->

  </div>
</template>

<script>
import HiCounter from './components/HiCounter.vue'
import ListRendering from './components/ListRendering.vue'
export default {
  name: "App",
  components: {
    HiCounter,
    ListRendering,
  }
}

// export default{
//   name:'example1',
// data(){
//     return{
//       counter:0
//     }
// }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'

</style>
