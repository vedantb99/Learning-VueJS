<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view :allBlogs="blogs" />
  </div>
</template>
<script>
export default {
  name: 'App1',
  data () {
    return {
      blogs: [
        {
          title: 'SoundStream: An End-to-End Neural Audio Codec',
          author: 'Neil Zeghidour',
          description: 'Audio codecs are used to efficiently compress audio to reduce either storage requirements or network bandwidth. Ideally, audio codecs should be transparent',
          count: 10,
          link: 'https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html'
        },
        {
          title: 'What Are The Pros And Cons Of Using Vue.js',
          author: 'Iryna Vasiutynska',
          description:
            'Vue.js is a well-known term in the development of state-of-the-art web applications',
          count: 230,
          link: 'https://towardsdatascience.com/what-are-the-pros-and-cons-of-using-vue-js-3689d00d87b0'
        },
        {
          title: 'What Are The Pros And Cons Of Using Bootstrap',
          author: 'Jatin Sharma',
          description:
            'Now, frameworks may save you a bunch load of time that you would usually spend in coding. But it restricts your crea',
          count: 120,
          link: 'https://www.uplers.com/blog/what-are-the-pros-cons-of-foundation-and-bootstrap/#:~:text=The%20Advantages%20of%20Bootstrap%20Development%20are%3A&text=A%20consistent%20framework%20that%20supports,JavaScript%20plugins%20using%20the%20jQuery'
        },
        {
          title: 'Bootstrap: Pros and Cons',
          author: 'Aryan Samaja',
          description:
            'Bootstrap is a well-known term in the development of state-of-th',
          count: 232,
          link: 'https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html'
        }
      ]
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
