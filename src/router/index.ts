import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Questionnaire from '../views/Questionnaire.vue'
import UserProfile from '../views/UserProfile.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'questionnaire',
    component: Questionnaire
  },
  {
    path: '/user-profile',
    name: 'user-profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
