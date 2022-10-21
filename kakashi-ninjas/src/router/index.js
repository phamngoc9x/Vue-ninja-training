import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreateCharacters from '../views/characters/CreateCharacters.vue'
import CharactersDetails from '../views/characters/CharactersDetails.vue'
import UserCharacters from '../views/characters/UserCharacters.vue'
import { projectAuth } from '@/firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard', user);

  if(!user) {
    next({name: 'Login'})
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/characters/create',
    name: 'CreateCharacters',
    component: CreateCharacters,
    beforeEnter: requireAuth
  },
  {
    path: '/characters/:id',
    name: 'CharactersDetails',
    component: CharactersDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/characters/user',
    name: 'UserCharacters',
    component: UserCharacters,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
