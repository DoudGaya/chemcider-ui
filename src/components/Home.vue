<template>
   <div class=" flex flex-col md:h-full">
     <div class=" w-full sticky top-0 ">
        <Header></Header>
    </div>
    <div class=" w-full flex flex-col min-h-full flex-1 h-[100%]  dark:bg-[#2E2E2E] bg-[#F4F4F4] dark:text-white">
    <Main></Main>
    <Footer></Footer>
</div>
   </div>
</template>


<script>
import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue'
import Main from './Main.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        Main
    },
    data: function() {
        return {
          
        }
    },
    methods: {
        changeLogo() {
            this.logoText = this.newLogo
        }
    }
}

</script>