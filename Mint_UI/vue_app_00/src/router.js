import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/tabbar/Home.vue"
import NewsList from "./components/home/NewsList.vue"
import test01 from "./components/test/test01.vue"
import test02 from "./components/test/test02.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import GoodsList from "./components/goods/GoodsList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/NewsList", component: NewsList },
    { path: "/test01", component: test01 },
    { path: "/test02/:age", component: test02 },
    { path: "/NewsInfo", component: NewsInfo },
    { path: "/GoodsList", component: GoodsList },
    { path: "/GoodsInfo/:id", component:GoodsInfo},
  ]
})
