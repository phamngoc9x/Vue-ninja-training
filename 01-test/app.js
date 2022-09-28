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
          img: 'assets/1.jpg',
          isFav: true
        },
        {
          title: 'Harry potter',
          author: 'my author',
          img: 'assets/2.jpg',
          isFav: false
        },
        {
          title: 'Hes man',
          author: 'my author',
          img: 'assets/3.jpg',
          isFav: true
        },
      ]
    }
  },
  methods: {
    toggleShowBooks(value) {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav =  !book.isFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book)=> book.isFav)
    }
  }
})

app.mount('#app')