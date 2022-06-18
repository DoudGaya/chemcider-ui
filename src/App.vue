<template>
<router-view></router-view>
</template>


<script>
import Home from './components/Home.vue'
export default {
    components: {
        Home
    },
    name: 'App',
    data() {
        return {
            name: 'Hello World'
        }
    }
}
</script>