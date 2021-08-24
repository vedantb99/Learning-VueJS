<template>
  <div id="app">

          <NavBar/>
          <LeftColumn/>
          <br>
          <h1>Leaderboard</h1>
         <div class="container">
          <LeaderBoard/>
         </div>

  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'
import LeftColumn from './components/LeftColumn.vue'
import LeaderBoard from './components/LeaderBoard.vue'
export default {
  name: 'App',
  components: {

    NavBar,
    LeftColumn,
    LeaderBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
