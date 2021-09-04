import {createRouter, createWebHistory} from 'vue-router'
import Lessons from '../components/Lessons'
import Files from '../components/Files'
const routes = [
  {
    path: '/',
    component: Lessons
  },
  {
    path: '/files',
    component: Files
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
