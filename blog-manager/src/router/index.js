import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Admin from '../components/Admin.vue'
import Welcome from '../components/Welcome.vue'
import Allarticles from '../components/Allarticles.vue'
import Sortmessages from '../components/Sortmessages.vue'
import Labelmessages from '../components/Labelmessages.vue'
import Publishblog from '../components/Publishblog.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path: '/',redirect:'/login'},
    {path: '/login', component:Login},
    {path:'/admin',
     component:Admin,
     redirect:'/welcome',
     children:
     [
     {path: '/welcome',component: Welcome},
     {path:'/allarticles',component:Allarticles},
     {path:'/sortmessages',component:Sortmessages},
     {path:'/labelmessages',component:Labelmessages},
     {path:'/publishblog',component:Publishblog},
  ]
  }
  ]
})









// //挂载路由导航守卫
// router.beforeEach((to, from, next) =>{
//   //to 将要访问的路径
//   //from 代表从哪个路径跳转而来
//   //next 是一个函数， 表示放行
//   //next() 放行  next('login') 强制跳转
//   if (to.path ==='/login') return next()
//   //获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next ('/login')
//   next()
// })
export default router
