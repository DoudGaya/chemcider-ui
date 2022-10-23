<template>
    <div class=" bg-purple-300 fixed w-full z-50">
        <!-- <img :src="product" class="h-32 object-cover w-full" alt="" srcset=""> -->
    </div>
 <div class=" flex pt-6 w-10/12 space-x-6 mx-auto ">

    <div class=" w-3/12  ">
        <div class=" w-full">
            <div class=" fixed bg-white rounded-2xl h-screen  w-[320px]">
               <div class=" bg-gray-200 rounded-full my-6 flex px-3 mx-4 ">
                <input type="search" class=" w-full pl-4 outline-none border-none bg-gray-200 rounded-l-full" name="Search Something..." id="">

                <button class=" p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 flex-none h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
               </div>
            </div>
            <div class="">
                Someti
            </div>
          
        </div>
    </div>
    
    <div  
        class="
        dark:bg-black
        w-9/12
        flex
        px-4
      bg-gray-100
        dark
        rounded-lg
        h-full
        space-y-6
        flex-col
        ">

        <div class=" grid grid-cols-4  gap-4">
            <div v-for="product in products" :key="product.id" class=" flex flex-col  relative z-0 rounded-lg bg-gray-600 dark:bg-gray-900 text-white py-4">
                    <p class=" text-sm py-2 px-4 truncate">{{product.name}}</p>
                <img :src="product.img" alt="" class="" srcset="">
                <div class=" px-4 py-1 space-y-3 ">
                    <p class=" text-sm "> Amount: {{ product.volume }}</p>
                    <p class=" text-sm "> Price: NGN {{ product.price }}</p>
                    <p class=" text-sm "> Purity: {{ product.purity }}</p>
                    <button class=" bg-white right-6 bottom-[88px] group   shadow-lg text-black px-4 group hover:space-x-2 rounded-full flex items-center justify-center absolute w-10 hover:w-auto h-10">
                        <p class=" hidden group-hover:block text-sm transition-all duration-150 ease-in-out delay-150">Add to cart</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 flex-none stroke-black h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
 </div>
</template>

<script>

import {mapState} from 'vuex'
export default {

    computed: {
        ...mapState({
            cat: 'productsCategories',
            products: 'products',
            product: 'product'
        })
    }

}
</script>

<style>

</style>