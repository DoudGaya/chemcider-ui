<template>
    <div >
           <div class="fixed left-0 right-0 z-50 top-0">
            <Header></Header>
           </div>
        <div class=" mt-16">
            <router-view></router-view>
        </div>
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