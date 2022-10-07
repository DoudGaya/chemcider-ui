<template>
    <div class=" h-screen">
         <div class="">
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