import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';
import HomePage from '@/components/HomePage'
import Search from '@/components/Search'
import Gandhi from '@/components/Gandhi'
import Favorites from '@/components/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ronswanson',
      name: 'Search',
      component: Search
  	},
  	{
      path: '/gandhi',
      name: 'Gandhi',
      component: Gandhi
  	},
  	{
  	  path: '/favorites',
      name: 'Favorites',
      component: Favorites
  	}
  ]
})
