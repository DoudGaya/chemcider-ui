<template>
    <div class=" w-full py-4 px-6 md:hidden  dark:bg-black bg-white border-t-2 flex justify-between bottom-0 sticky">
        <a href="#" class=" px-3 py-1 border border-gray-700 rounded-md">
            Log In
        </a>

        <a class=" text-white py-1 dark:text-black bg-black px-6 rounded-md dark:bg-slate-100">
            Register 
        </a>

        
    </div>
</template>

<script >
export default {
    name: 'Footer',
    data() {
        return {
            logo: 'Chemcider',
            slogan: 'Solving chemical problems acrosss the globe'

        }
    }
}

</script>

<style lang="scss" scoped>

</style>