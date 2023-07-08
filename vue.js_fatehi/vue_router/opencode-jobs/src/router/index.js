import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
// import Jobs from '../views/Jobs/Jobs.vue'
// import JobsDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/*webpackChunkName: "home"*/ '../views/HomeView.vue')
    // component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView

    // lazy loading:
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  
    component: () =>
      import(/*webpackChunkName: "about"*/ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    // component: Jobs
    component: () =>
      import(/*webpackChunkName: "jobs"*/ '../views/Jobs/Jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    // component: JobsDetails,
    component: () =>
      import(/*webpackChunkName: "jobs-details"*/ '../views/Jobs/JobsDetails.vue'),
    props: true

  },
  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // NotFound
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
