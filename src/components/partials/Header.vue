<template >
   <div class=" w-full px-5 sm:px-20 py-6 dark:bg-black bg-white flex justify-between align-middle top-0 sticky drop-shadow-sm ">

    <ul class="hidden sm:flex space-x-10 dark:text-white ">
        <li>
            <a href="#">
                Home
            </a>
        </li>
        <li>
            <a href="#">
                Community
            </a>
        </li>
        <li>
            <a href="#">
                Article 
            </a>
        </li>
        <li>
            <a href="#">
                Products
            </a>
        </li>
    </ul>
    
    <a href="" class=" md:hidden">
        <img src="../../assets/images/chemcider_logo.png" alt="" class=" h-7 block dark:hidden" srcset="">
        <img src="../../assets/images/chemcider_logo_white.png" alt="" class=" h-7 dark:block hidden" srcset="">
    </a>

    <div class=" flex space-x-6">
        <a href="" class=" px-4 py-1 rounded-md border border-gray-700 dark:border-white dark:text-white">
            Lon In
        </a>
        <a href="" class=" px-4 py-1 rounded-md bg-black dark:bg-white text-white dark:text-black">
            Create an account 
        </a>
    </div>
    <button class=" block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 dark:stroke-white stroke-black w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
   </div>
</template>

<script>
export default {
    name: 'Header',
    data: function () {
       return {
            icons : []
       } 
    }
}
</script>