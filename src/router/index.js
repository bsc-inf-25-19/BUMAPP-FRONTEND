import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import Product from '../views/Product/Product.vue'
import Admin from  '../views/Admin.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowProduct from '../views/Product/ShowProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product',
    name: 'Product',
    component: Product
  }
  ,
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path: '/product/show/:id',
    name: 'ShowProduct',
    component: ShowProduct,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
    ,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
