<template>
   <div id="HiCounter">
  <!-- <button v-on:click="counter += 1">Add 1</button>
  <br>
  <button v-on:click="counter -=1">Sub 1</button> -->
  <button v-on:click="addFunc">Add 1</button>
  <br>
  <button v-on:click="subFunc">Sub 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
</template>

<script>

export default {
  name: "HiCounter",
  
  data() {
    return {
    counter:0,
  }
  },
  methods: {
     
addFunc(){
    this.counter+=1;
},
subFunc(){
  this.counter-=1;
}

  }
};

</script>


