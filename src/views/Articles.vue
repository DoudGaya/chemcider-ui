<template>
   <div class=" flex flex-col md:h-full">
    
    <div class=" w-full flex flex-col min-h-full flex-1 h-[100%]  dark:bg-[#2E2E2E] bg-[#F4F4F4] dark:text-white">
            <About></About>
    </div>
   </div>
</template>
<script>

import About from '../components/pages/About.vue'
export default {
    name: 'About',
    components: {
        About
    },

    methods: {
        changeLogo() {
            this.logoText = this.newLogo
        }
    }
}

</script>