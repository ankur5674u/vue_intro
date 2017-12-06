import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/aboutUS/about'
import ContactUS from '@/components/ContactUS'
import Friend from '@/components/Friend'
import UserManagement from '@/components/User/userManagement'
import Nasa from '@/components/Nasa'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/ContactUS',
      name: 'ContactUS',
      component: ContactUS
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/UserManagement',
      name: 'UserManagement',
      component: UserManagement
    },
    {
      path: '/Nasa',
      name: 'Nasa',
      component: Nasa
    }
  ]
})
