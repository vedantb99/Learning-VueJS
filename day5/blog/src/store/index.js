import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [
      {
        id: 0,
        title: 'SoundStream: An End-to-End Neural Audio Codec',
        author: 'Neil Zeghidour',
        description: 'Audio codecs are used to efficiently compress audio to reduce either storage requirements or network bandwidth. Ideally, audio codecs should be transparent',
        count: 10,
        link: 'https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html'
      },
      {
        id: 1,
        title: 'What Are The Pros And Cons Of Using Vue.js',
        author: 'Iryna Vasiutynska',
        description:
          'Vue.js is a well-known term in the development of state-of-the-art web applications',
        count: 230,
        link: 'https://towardsdatascience.com/what-are-the-pros-and-cons-of-using-vue-js-3689d00d87b0'
      },
      {
        id: 2,
        title: 'What Are The Pros And Cons Of Using Bootstrap',
        author: 'Jatin Sharma',
        description:
          'Now, frameworks may save you a bunch load of time that you would usually spend in coding. But it restricts your crea',
        count: 120,
        link: 'https://www.uplers.com/blog/what-are-the-pros-cons-of-foundation-and-bootstrap/#:~:text=The%20Advantages%20of%20Bootstrap%20Development%20are%3A&text=A%20consistent%20framework%20that%20supports,JavaScript%20plugins%20using%20the%20jQuery'
      },
      {
        id: 3,
        title: 'Why we no longer use .net! ',
        author: 'Vedant B',
        description:
          'Bootstrap is a well-known term in the development of state-of-th',
        count: 232,
        link: 'https://ai.googleblog.com/2021/08/soundstream-end-to-end-neural-audio.html'
      }
    ]
  },
  mutations: {
    increment (state, blogId) {
      state.blogs[blogId].count += 1
    }

  },
  getters: {
    sorting (state) {
      return state.blogs.sort((x, y) => y.count - x.count)
    }
    // getCount (state, author) {
    //   return state.blogs[author].count
    // }

  },
  actions: {

  },
  modules: {
  }
}
)
