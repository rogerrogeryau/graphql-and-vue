import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Home_vuex from './components/Home_vuex.vue'
import Profile from './components/Auth/Profile.vue'
import Signin from './components/Auth/Signin.vue'
import Signup from './components/Auth/Signup.vue'
import AddPost from './components/Posts/AddPost.vue'
import Posts from './components/Posts/Posts.vue'
// import Home from './components/Home.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home_vuex',
      name: 'Home_vuex',
      component: Home_vuex
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/addPost',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
