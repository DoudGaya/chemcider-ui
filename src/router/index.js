import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Articles from '../views/Articles.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import Community from '../views/Community.vue'
import Suppliers from '../views/Suppliers.vue'



const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    },

    {
        path: '/suppliers',
        name: 'Suppliers',
        component: Suppliers
    },

    {
        path: '/community',
        name: 'Community',
        component: Community
    },

    {
        path: '/products',
        name: 'Products',
        component: Products
    },

    {
        path: '/product',
        name: 'Product',
        component: Product
    },

    // Auth Pages 

    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]





const router = createRouter( {
    history: createWebHistory(),
    routes: routes
})


export default router;