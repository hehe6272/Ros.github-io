import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

// 定義路由表
const routes = [
  {
    path: '/',
    name: '小慶個人網站',
    component: HomePage
  }
]

// 執行路由表
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior () {
    return { left: 0, top: 0 }
  },
  routes
})

// 將 name 自動賦予至 head 中的 title
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
