import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null)
  const isPending = ref(false)

  let docRef = projectFirestore.collection(collection).doc(id)

  const deleteDoc = async () => {
    isPending.value = true
    error.value = null
    try {
      const res = docRef.delete()
      isPending.value = false
      return res
    } catch(err) {
      isPending.value = false
      console.log(err.message)
      error.value = 'Could not delete the document!'
    }
  }
  const updateDoc = async (data) => {
    isPending.value = true
    error.value = null
    try {
      const res = docRef.update(data)
      isPending.value = false
      return res
    } catch(err) {
      isPending.value = false
      console.log(err.message)
      error.value = 'Could not update the document!'
    }
  }

  return { error, isPending, deleteDoc, updateDoc}
}
export default useDocument