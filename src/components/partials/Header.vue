<template >
<!-- mobile navigations -->
<div class=" z-50 absolute w-full ease  my-16 mx-auto  px-4">

    <!-- mobile dropdown -->
        <Transition
        enter-from-class="opacity-0 -mt-4 "
        enter-active-class=" transition-all ease-out delay-75 duration-700 "
        enter-to-class=" opacity-100 mt-0 "


        leave-from-class=" opacity-100 mt-0 "
        leave-active-class="transition-all ease-out delay-75 duration-700"
        leave-to-class=" opacity-0 -mt-4"
        >
            <div v-show="navOpen" class=" bg-gray-900/50 md:hidden backdrop-brightness-25 backdrop-blur-md text-white rounded-md py-10 px-4 ">
                <ul class=" space-y-3">
                    <li class=" ">
                        <router-link  to="/" class=" ">
                            <div class=" flex items-center space-x-3 w-full px-4 rounded-md py-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            <p class=" text-xl">Home</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class=" ">
                            <div class=" flex items-center space-x-3 w-full px-4 rounded-md py-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            <p class=" text-xl">About Us</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/suppliers">
                            <router-link to="" class=" ">
                            <div class=" flex items-center space-x-3 w-full px-4 rounded-md py-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            <p class=" text-xl">Suppliers</p>
                            </div>
                        </router-link>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/articles" class=" ">
                            <div class=" flex items-center space-x-3 w-full px-4 rounded-md py-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            <p class=" text-xl">Articles</p>
                            </div>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/community" class=" ">
                            <div class=" flex items-center space-x-3 w-full px-4 rounded-md py-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            <p class=" text-xl">Community</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class=" h-[50px]">

                </div>
            </div>
        </Transition> 
    <!-- end of mobile dropdown -->
</div>

<!-- end of mobile navigation -->
   <div class=" w-full px-5 flex sm:px-20 py-6 dark:bg-black dark:text-white bg-white justify-between align-middle top-0 sticky drop-shadow-sm ">
    <div class="">
        <router-link to="/" class=" font-logo tracking-wide text-lg">
            Chemcider
        </router-link>
    </div>
   <ul class="hidden md:flex space-x-10 dark:text-white ">
        <li>
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link to="/community">
                Community
            </router-link>
        </li>
        <li>
            <router-link to="/article">
                Article 
            </router-link>
        </li>
        <li>
            <router-link to="/products">
                Products
            </router-link>
        </li>
    </ul>
    
    <!-- <router-link to="/" class=" md:hidden">
        <img src="../../assets/images/chemcider_logo.png" alt="" class=" h-7 block dark:hidden" srcset="">
        <img src="../../assets/images/chemcider_logo_white.png" alt="" class=" h-7 dark:block hidden" srcset="">
    </router-link> -->

    <div class=" md:flex hidden  space-x-6">
        <router-link to="/login" class=" px-4 py-1 rounded-md border border-gray-700 dark:border-white dark:text-white">
            Lon In
        </router-link>
        <router-link to="/register" class=" px-4 py-1 rounded-md bg-black dark:bg-white text-white dark:text-black">
            Create an account 
        </router-link>
        <button @click="changeMedia" class="md:block  hidden bg-gray-400/50 hover:bg-gray-400/25 p-2 rounded-md ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 dark:stroke-white w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        </button>
        
    </div>
    <button @click="navChange" class=" block md:hidden">
        <svg  xmlns="http://www.w3.org/2000/svg" v-if="!navOpen" class="h-6 dark:stroke-white stroke-black w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" v-else class="h-6 dark:stroke-white w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
   </div>
</template>

<script>
export default {
    name: 'Header',
    data: function () {
       return {
            icons : [],
            navOpen: false,
            themeColor: 'light'
       } 
    },

    methods: {
        navChange() {
            this.navOpen = !this.navOpen
        },

       
    }
}
</script>