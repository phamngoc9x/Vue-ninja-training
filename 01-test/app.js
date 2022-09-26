const app = Vue.createApp({
    //data, functions
  data() {
    return {
      url: 'https://www.udemy.com/',
      showBooks: true,
      books: [
        {
          title: 'The King Return',
          author: 'my author',
          img: 'assets/1.jpg'
        },
        {
          title: 'Harry potter',
          author: 'my author',
          img: 'assets/2.jpg'
        },
        {
          title: 'Hes man',
          author: 'my author',
          img: 'assets/3.jpg'
        },
      ]
    }
  },
  methods: {
    toggleShowBooks(value) {
      this.showBooks = !this.showBooks
    },

    handleEvent(e, data) {
      console.log(e, e.type)

      if(data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')