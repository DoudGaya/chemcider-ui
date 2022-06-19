<template>
   <div class=" flex flex-col md:h-full">
    
    <div class=" w-full flex flex-col min-h-full flex-1 h-[100%]  dark:bg-[#2E2E2E] bg-[#F4F4F4] dark:text-white">
            <Main></Main>
    </div>
   </div>
</template>
<script>

import Main from '../components/Main.vue'
export default {
    name: 'Home',
    components: {
        Main
    },

    methods: {
        changeLogo() {
            this.logoText = this.newLogo
        }
    }
}

</script>