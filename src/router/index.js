import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import Profiles from '../views/Profiles.vue'




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
        path: '/projects',
        name: 'Projects',
        component: Projects
    },

    {
        path: '/profiles',
        name: 'Profiles',
        component: Profiles
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


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router;