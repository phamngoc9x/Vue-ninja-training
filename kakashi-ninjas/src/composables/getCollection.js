import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getCollection = (collection, query) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createAt')

  if(query) {
    collectionRef = collectionRef.where(...query)
  }

  const unsub =  collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createAt && results.push({ ...doc.data(), id: doc.id })
    })
    console.log('results', results)
    console.log('snap shot');
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message);
    documents.value = null
    error.value = 'could not fetch data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub() )
  })

  return { documents, error }
}

export default getCollection