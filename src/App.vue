<template>
    <div class=" w-full sticky top-0 ">
        <Header></Header>
    </div>
    <router-view></router-view>
        <Footer></Footer>
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