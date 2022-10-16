import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
  console.log('user state change current user is:');
  user.value = _user
})

const getUser = () => {
  return { user }
}
export default getUser