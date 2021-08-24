<template>
<div>
          <link rel="stylesheet" type="text/css" href="./public/css/styles.css">

  <h2>Top Blogs</h2>
<p>Click on like to follow the bloggers</p>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Neil Zeghidour,</h3>
      <p>SoundStream: An End-to-End Neural Audio Codec</p>
      <p>Audio codecs are used to efficiently compress audio to reduce either storage requirements or network bandwidth.
Ideally, audio codecs should be transparent...<a target="_blank" href="https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html">read more</a></p>
      <p>Like the Blog</p>
        <button v-on:click="counter1+=1">Likes:{{counter1}}</button>

    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Iryna Vasiutynska</h3>
      <p>What Are The Pros And Cons Of Using Vue.js</p>
      <p>Vue.js is a well-known term in the development of state-of-the-art web applications. It is currently one of the most emerging front-end technologies that are often mentione.<a target="_blank" href="https://towardsdatascience.com/what-are-the-pros-and-cons-of-using-vue-js-3689d00d87b0">read more</a></p>
      <p>Like the Blog</p>
        <button v-on:click="counter2+=1">Likes:{{counter2}}</button>

    </div>
</div>

<div class="column">
   <div class="card">
      <h3>Arya Samaja</h3>
      <p>Learn how to create responsive column cards with CSS.</p>
      <p>Vue.js is a well-known term in the development of state-of-the-art web applications. It is currently one of the most emerging front-end technologies that are often mentione.<a target="_blank" href="https://towardsdatascience.com/what-are-the-pros-and-cons-of-using-vue-js-3689d00d87b0">read more</a></p>
      <p>Like the Blog</p>
        <button v-on:click="counter3+=1">Likes:{{counter3}}</button>

    </div>
  </div>
  <div class="column">
   <div class="card">
      <h3>Jatin Sharma</h3>
      <p>What Are The Pros And Cons Of Using Bootstrap</p>
      <p>Now, frameworks may save you a bunch load of time that you would usually spend in coding. But it restricts your creativity, for which businesses preferrably<a target="_blank" href="https://www.uplers.com/blog/what-are-the-pros-cons-of-foundation-and-bootstrap/#:~:text=The%20Advantages%20of%20Bootstrap%20Development%20are%3A&text=A%20consistent%20framework%20that%20supports,JavaScript%20plugins%20using%20the%20jQuery">read more</a></p>
      <p>Like the Blog</p>
        <button v-on:click="counter4+=1">Likes:{{counter4}}</button>

    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'Cards',
  data () {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counter4: 0
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 10 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
