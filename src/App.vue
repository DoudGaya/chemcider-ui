<template>
    <div class="bg-purple-50 h-screen">
         <div class="z-0 top-0 inset-x-0 fixed  ">
            <Header></Header>
         </div>
            <router-view></router-view>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
export default {
    components: {
        Header,
        Footer
    },
    name: 'App',
}
</script>