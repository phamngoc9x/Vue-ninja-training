import { ref } from 'vue'

const createPost = () => {
  const error = ref(null)
  const load = async () => {
    try {
      await new Promise (resolve => {
        setTimeout(resolve, 2000)
      })

      let data = await fetch('http://localhost:3000/posts' , {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)

      })
      if(!data.ok) {
        throw Error('that post does not exist')
      }
    }
    catch(err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { error, load}
}

export default createPost