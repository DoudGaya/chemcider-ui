<template>
   <div class=" flex flex-col md:h-full">
    <div class=" w-full flex flex-col min-h-full flex-1 h-[100%]   dark:text-white">
        <Home></Home>  
    </div>
   </div>
</template>
<script>
import Home from '../components/pages/Home.vue';
export default {
    name: "HomePage",
    components: { Home }
}

</script>