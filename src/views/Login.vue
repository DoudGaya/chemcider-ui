<template>
    <div class=" md:grid md:grid-cols-2 py-20 md:py-42 min-h-[100%] px-10" >


      <div class=" w-full my-auto flex">
        <div class=" hidden md:block dark:bg-black bg-white text-black dark:text-white rounded-md w-full">
         <div class="flex flex-col py-10 px-10  justify-center">
          <h1 class="font-logo text-3xl">Chemcider</h1>
          <p>Solving chemical problems accross the globe</p>

           <!--  main home navigators  -->
        <div class=" flex space-x-6 w-full py-4 ">
            <div>
                <a href="#" class=" flex flex-col items-center dark:bg-gray-700 bg-gray-200 py-2 rounded-md  px-4 pt-4 space-y-1">
                    <img src="../assets/images/periodic_table.png" alt="" class=" h-12" srcset="">
                    <small>Periodic Table</small>
                </a>
            </div>
            <div>
                <a href="#" class=" flex flex-col items-center dark:bg-gray-700 bg-gray-200 py-2 rounded-md  px-4 pt-4 space-y-1">
                    <img src="../assets/images/chemicals.png" alt="" class=" h-12" srcset="">
                    <small>Products</small>
                </a>
            </div>
            <div>
                <a href="#" class=" flex flex-col items-center dark:bg-gray-700 bg-gray-200 py-2 rounded-md  px-4 pt-4 space-y-1">
                    <img src="../assets/images/community.png" alt="" class=" h-12" srcset="">
                    <small>Community</small>
                </a>
            </div>
            <div>
                <button @click="changeLogo" href="#" class=" flex flex-col items-center dark:bg-gray-700 bg-gray-200 py-2 rounded-md  px-4 pt-4 space-y-1">
                    <img src="../assets/images/article.png" alt="" class=" h-12" srcset="">
                    <small>Article</small>
                </button>
            </div>
        </div>
        <!-- end of main home navigators  -->
         </div>
        </div>

      </div>

      <div class=" flex justify-center">
        <div class=" w-full h-full md:w-1/2 flex px-6 text-center space-y-4 py-28 flex-col">
          <h1 class=" text-xl dark:text-white">Hi, Welcome back</h1>
        <!-- the single form element design -->
        <div class=" flex items-center">
          <label for="First Name" class="hidden">First Name</label>
          <input type="text" placeholder="First Name" class=" peer focus:border focus:border-gray-200 bg-gray-200 focus:outline-none focus:bg-white   px-4 py-3 flex-1">
            <div class=" w-10 px-4 flex items-center justify-center bg-gray-200 py-3  peer-focus:bg-slate-900 peer-focus:border peer-focus:border-slate-900 text-gray-700 peer-focus:text-white  h-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 flex-none peer-focus:stroke-4  w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
            </div>
        </div>
        <!-- end of the single form element design -->

         <!-- the single form element design -->
        <div class=" flex  items-center">
          <label for="Password" class="hidden">Password</label>
          <input type="password" id="pwd" placeholder="Password" class=" focus:border peer bg-gray-200 focus:outline-none focus:bg-white   px-4 py-3 flex-1">
            <div class=" w-10 px-4 flex items-center justify-center bg-gray-200 py-3  peer-focus:bg-slate-900 peer-focus:border peer-focus:border-slate-900 text-gray-700 peer-focus:text-white  h-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 flex-none peer-focus:stroke-4  w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
        </div>
        <!-- end of the single form element design -->



        <div class=" flex  items-center">
          <button class="px-4 py-2 w-full bg-black text-white dark:bg-gray-300 dark:text-black text-xl">Login</button>
        </div>


     
      </div>
      </div>
     

      

     
        
    </div>
</template>

<script setup>

</script>

<style  scoped>
.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

</style>