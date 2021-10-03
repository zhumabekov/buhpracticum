import {createRouter, createWebHistory} from 'vue-router'
import Lessons from '../components/Lessons'
import Files from '../components/Files'
import Video from '../components/Video'
const routes = [
  {
    path: '/',
    component: Lessons
  },
  {
    path: '/lesson/:folderId',
    component: Files
  },
  {
    path: '/lesson/:folderId/:fileId',
    component: Video
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
