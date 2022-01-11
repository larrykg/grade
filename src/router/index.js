import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const News = () => import('../views/news/News')
const NewsIndustry = () => import('../views/news/newsChildren/NewsIndustry')
const NewsDynamic = () => import('../views/news/newsChildren/NewsDynamic')
const RatingStandard = () => import('../views/ratingStandard/RatingStandard')
const Charge = () => import('../views/charge/Charge')
const Help = () => import('../views/help/Help')


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/rating_standard',
    component: RatingStandard
  },
  {
    path: '/charge',
    component: Charge
  },
  {
    path: '/Help',
    component: Help
  },
  {
    path: '/news',
    component: News,
    children: [{
      path: 'industry',
      component: NewsIndustry
    },
      {
        path: 'dynamic',
        component: NewsDynamic
      },
      {
        path: '',
        redirect: 'news'
      },
    ]
  }

]

export default new Router({
  routes,
  mode: "history"
})
