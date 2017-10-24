import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Songs from '../components/Songs/Index'
import CreateSong from '../components/CreateSong'
import EditSong from '../components/EditSong'
import ViewSong from '../components/ViewSong/Index'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'CreateSong',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'Song',
      component: ViewSong
    },
    {
      path: '/songs/edit/:songId',
      name: 'EditSong',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
