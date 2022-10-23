<template>
    <div class=" z-10">
        <div class=" bg-white dark:bg-black dark:text-white sticky top-0 py-4 lg:py-0  w-full flex justify-between px-6 md:px-20 drop-shadow-sm items-center">
        <div class="  ">
            <router-link to="/" rel="">
                <h1 class=" font-logo ">Chemcider</h1>
            </router-link>
        </div>
<!-- the button toggler -->
        <div class=" lg:hidden">
            <button @click="updateModal" class=" p-2 focus:outline-none rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </button>
        </div>
        <!-- The laptop nav -->
        <div class=" hidden lg:flex h-max   justify-center ">
            <ul class=" flex h-full items-center justify-center ">
                <li class=" flex">
                    <router-link to="/"  class="h-[70px] py-4 flex items-center dark:bg-gray-800/90 bg-blue-100/40 px-4 border-b-4 border-blue-400">
                           <p> Home </p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects" class=" h-[70px] flex items-center dark:hover:bg-gray-800/90 hover:bg-blue-100/40 px-4 border-b-4 border-transparent hover:border-blue-300  ">
                       <p>Projects</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/products" class=" h-[70px] flex items-center dark:hover:bg-gray-800/90 hover:bg-blue-100/40 px-4 border-b-4 border-transparent hover:border-blue-300  ">
                        <p>Products</p>
                    </router-link>
                </li>

                <li>
                    <router-link to="/profiles" class=" h-[70px] flex items-center dark:hover:bg-gray-800/90 hover:bg-blue-100/40 px-4 border-b-4 border-transparent hover:border-blue-300  ">
                        <p>Profiles</p>
                    </router-link>
                </li>

                
            </ul>
        </div>

        <div class=" hidden lg:flex space-x-6 ">
            <router-link to="/login" class=" py-1 rounded-md px-4 border-2 ">Login</router-link>
            <router-link to="/register" class=" py-1 rounded-md px-4 border bg-blue-900 text-white dark:bg-white dark:text-blue-900 ">Create account</router-link>
            <button class=" py-2 px-2 rounded-md border-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </button>
        </div>
<!-- end of toggler  -->
    </div>
    <div  v-if="state.mobileModal" class="lg:hidden relative px-4  ">
        <div class="absolute z-50 right-8 top-0 bg-white border flex flex-col -mt-4 drop-shadow-lg rounded-lg py-6 px-4 w-1/2">
            <ul  class=" flex flex-col space-y-4 w-full">
                <li class=" w-full">
                    <router-link to="/login" class=" py-2 w-full  flex ">
                        Login
                    </router-link>
                </li>
                <li class=" w-full">
                    <router-link to="/register" class=" py-2 w-full flex ">
                        Sign Up
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
import { reactive } from 'vue'


export default {
    setup() {

        const state = reactive({
            mobileModal: false
        })


        const updateModal = () => {
            return state.mobileModal = !state.mobileModal
        }

        return {
            state,
            updateModal
        }
        
    },
}
</script>

<style>



</style>