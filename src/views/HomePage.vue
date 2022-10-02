<template>
   <div class=" flex flex-col">
    <div class=" w-full flex flex-col  flex-1 dark:text-white">
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