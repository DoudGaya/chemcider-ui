<template>
<div class="pb-[1px]">
    <div class=" flex items-center space-y-2 flex-col  md:py-24 mt-28 md:mt-10 lg:mt-0">
        <h2 class=" font-logo md:text-4xl text-2xl tracking-wider font-thin" @mouseover="changeLogo">{{ logoText }}</h2>
        <h3 class="  md:text-xl tracking-wider font-thin">{{ slogan }}</h3>
        <hr class=" w-32 border hidden md:block">

        <div class=" md:flex hidden justify-center flex-col text-center w-4/6">
            <p class=" md:text-xl my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellat? Facilis, aliquam voluptates corrupti dignissimos natus soluta similique at quod culpa explicabo repellat iure nemo quis atque, reiciendis maiores ratione iusto? A.
            </p>

            <div class=" w-full hidden md:grid grid-cols-4 px-10 py-10 dark:bg-black dark:text-white bg-white rounded-xl">
                <div v-for="nav in navs" :key="nav.id" class=" flex flex-col items-center space-y-3">
                <a :href="nav.url" class="h-24 w-24 flex justify-center items-center dark:bg-gray-700 bg-gray-200  rounded-md drop-shadow-md ">
                    <img :src="nav.icon" alt="" srcset="">
                </a>
                <p>{{ nav.name }}</p>
                </div>

            </div>
        </div>

    </div>
    <div class=" w-full flex flex-col md:hidden h-full pt-4">
        <!--  main home navigators  -->
        <div class=" flex justify-between px-10 w-full py-4 items-center">
            <div>
                <a href="#" class=" flex flex-col items-center space-y-1">
                    <img src="../../assets/images/periodic_table.png" alt="" class=" h-12" srcset="">
                    <small>Periodic Table</small>
                </a>
            </div>
            <div>
                <a href="#" class=" flex flex-col items-center space-y-1">
                    <img src="../../assets/images/chemicals.png" alt="" class=" h-12" srcset="">
                    <small>Products</small>
                </a>
            </div>
            <div>
                <a href="#" class=" flex flex-col items-center space-y-1">
                    <img src="../../assets/images/community.png" alt="" class=" h-12" srcset="">
                    <small>Community</small>
                </a>
            </div>
            <div>
                <button  href="#" class=" flex flex-col items-center space-y-1">
                    <img src="../../assets/images/article.png" alt="" class=" h-12" srcset="">
                    <small>Article</small>
                </button>
            </div>
        </div>
        <!-- end of main home navigators  -->
        <div class=" w-full border-t-2 mt-6 dark:bg-[#181818] bg-white h-full py-24 px-10 text-center rounded-t-xl">
           <div class=" flex justify-center flex-col items-center space-y-6">
            <h1 class=" font-bold text-xl">About Us</h1>
            <p class=" text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consectetur temporibus odio odit aperiam ullam repellat suscipit, deleniti in aliquam aspernatur tenetur, dicta earum officiis magni voluptates, ipsum eius! Omnis commodi facilis dolor quidem molestiae odit at ut doloremque quibusdam.</p>
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
            slogan: 'Solving chemical problems accross the globe...',
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