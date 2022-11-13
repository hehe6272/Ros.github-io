//  Written by Tershixia for this PROJECT.
//  Copyright (C) 2022 TershiXia
//  This file is distributed under the same license as the PROJECT project.
//  mmm25002500 <admin@tershi.com>, 2022.

import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

// 定義路由表
const routes = [
  {
    path: '/',
    name: '小慶個人網站',
    component: HomePage
  },
  {
    path: '/about',
    name: '關於我',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: '/yt',
    name: '我的 YouTube',
    component: () => import('@/views/YoutubePage.vue')
  },
  {
    path: '/app',
    name: '分享程式',
    component: () => import('@/views/ShareApp.vue')
  },
  {
    path: '/countdown',
    name: '倒數',
    component: () => import('@/views/CountDown.vue')
  }
  // {
  //   path: '/',
  //   name: '',
  //   component: () => import('')
  // }
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
