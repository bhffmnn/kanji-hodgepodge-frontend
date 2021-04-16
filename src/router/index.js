import Home from '@/pages/Home'
import About from '@/pages/About'
import Test from '@/pages/Test'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:kanji?',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})