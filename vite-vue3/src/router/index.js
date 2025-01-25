import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/", // http://localhost:5173
    component: () => import("../components/demo5/header.vue")
  },
  {
    path: "/nav", // http://localhost:5173/content
    component: () => import("../components/demo5/nav.vue")
  },
]

const router = createRouter({
  //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("to:", to) //即将进入的路由的信息
  console.log("from:", from) //当前即将离开的路由信息

  next()

  /*
      if(to.name == "history"){
          next(false) //拦截
      }else{
          next() //继续
      }
  */
})

export default router