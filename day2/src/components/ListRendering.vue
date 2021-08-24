<template>
<div class="container">
    <hr>
   <!-- <ul > -->
  <!-- <div v-for="(item, index) in items" :key="item.id">
    {{parentMessage}} - {{index}} -  {{item.message}}
</div> -->
 <!-- <li v-for="(item, index) in items" :key="item.id">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul> -->
<hr>
    <div class="col md-6">
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
      <h3>Below are their ids</h3>

  <div v-for="obj in objects" :key="obj.id">
    <p>This is parent div</p>
     <li v-for="(item, index) in items" :key="item.id">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
    <div >
      <p>inside child div</p>
 <h4 style="color:red"> {{obj.id}}</h4>
 </div>
  </div>
</ul>
    </div>
</div>
</template>
<script>

export default {
   name: "ListRendering",

  data() {
    return {
            parentMessage: 'Parent',

     items: [
      { message: 'The first element in this list is foo' },
      { message: 'Second is Bar' }
    ],
    objects:[
      
      {id:244},
        {id:2432},
    ]
  }
  }
};
</script>











