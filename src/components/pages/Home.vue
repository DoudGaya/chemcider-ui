<template>
<div class="">
    <div class=" flex items-center space-y-2 flex-col md:py-24 mt-20 md:mt-6 ">
        <h2 class=" font-logo md:text-4xl text-2xl tracking-wider font-thin" >{{ logoText }}</h2>
        <h3 class="  md:text-xl tracking-wider font-thin">{{ slogan }}</h3>
        <hr class="w-32 border hidden md:block">
        
        <div class=" md:flex hidden justify-center flex-col text-center w-4/6">
            <p class=" md:text-xl my-6">  A place for scientist and Technicians to share their beautiful works and have access to sponsors or partners on their projects</p>
            <div class=" w-full hidden md:grid grid-cols-4 px-10 py-10 dark:bg-black dark:text-white bg-white rounded-xl">
                <div v-for="nav in navs" :key="nav.id" class=" flex flex-col items-center space-y-3">
                <a :href="nav.url" class="h-24 w-24 flex justify-center items-center dark:bg-gray-700 bg-gray-200  rounded-md shadow-md ">
                    <img :src="nav.icon" alt="" srcset="">
                </a>
                <p>{{ nav.name  }} </p>
                </div>

            </div>
        </div>

    </div>
    <div class=" w-full flex flex-col md:hidden h-full pt-4">
        <!--  main home navigators  -->
        <div class=" grid p-8 grid-cols-2 gap-4 w-full py-4 ">
            <div>
                <a href="#" class="flex dark:bg-black bg-white rounded-lg flex-col py-4 items-center space-y-1">
                    <img src="../../assets/images/periodic_table.png" alt="" class=" h-12" srcset="">
                    <small>Periodic Table</small>
                </a>
            </div>

            <div>
                <a href="#" class="flex dark:bg-black bg-white rounded-lg flex-col py-4 items-center space-y-1">
                    <img src="../../assets/images/chemicals.png" alt="" class=" h-12" srcset="">
                    <small>Products</small>
                </a>
            </div>

            <div>
                <a href="#" class="flex dark:bg-black bg-white rounded-lg flex-col py-4 items-center space-y-1">
                    <img src="../../assets/images/community.png" alt="" class=" h-12" srcset="">
                    <small>Community</small>
                </a>
            </div>

            <div>
                <a  href="#" class="flex dark:bg-black bg-white rounded-lg flex-col py-4 items-center space-y-1">
                    <img src="../../assets/images/article.png" alt="" class=" h-12" srcset="">
                    <small>Article</small>
                </a>
            </div>
        </div>
        <!-- end of main home navigators  -->
        <div class=" w-full border-y-2 mt-6 dark:border-gray-700 h-full bg-white/70 py-10 dark:bg-gray-800/30 px-10 text-center rounded-xl">
           <div class=" flex justify-center flex-col items-center space-y-6">
            <p class=" text-lg"> Global community for Scientists and Technicians..</p>
           </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
       return {
            logoText: 'Chemcider',
            newLogo: 'Many Chef',
            slogan: 'Solving Scientific problems accross the globe',
            navs: [
                {
                    name: 'Periodic Table',
                    url: '#',
                    icon: '../src/assets/images/periodic_table.png'
                },

                {
                    name: 'Products',
                    url: '#',
                    icon: '../src/assets/images/chemicals.png'
                },

                {
                    name: 'Community',
                    url: '#',
                    icon: '../src/assets/images/community.png'
                },

                {
                    name: 'Articles',
                    url: '#',
                    icon: '../src/assets/images/article.png'
                }
            ]
       }
    }
}
</script>