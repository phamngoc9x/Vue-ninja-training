import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const useCollection = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      await projectFirestore.collection(collection).add(doc)
      isPending.value = false
    } catch(err) {
      console.log(err.message);
      error.value = 'Could not send the message'
      isPending.value = false
    }

  }
  return { error, addDoc, isPending }
}

export default useCollection