import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutComp from '@/components/AboutComp.vue'
import EduComp from '@/components/EduComp.vue'
import SkillsComp from '@/components/SkillsComp.vue'
import ProjectsComp from '@/components/ProjectsComp.vue'
import TestComp from '@/components/TestComp.vue'
import ContactComp from '@/components/ContactComp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComp
  },
  {
    path: '/education',
    name: 'education',
    component: EduComp
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsComp
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsComp
  },
  {
    path: '/test',
    name: 'test',
    component: TestComp
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
