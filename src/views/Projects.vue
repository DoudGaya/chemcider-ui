<template>
   <div class=" flex flex-col md:h-full">
    
    <div class=" w-full flex flex-col min-h-full flex-1 h-[100%]  dark:bg-[#2E2E2E] bg-[#F4F4F4] dark:text-white">
           <div class="">
                <ul>
                    <li v-for="todo in todos"></li>
                </ul>
           </div>
    </div>
   </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'Projects',
    computed: {
        ...mapState({
            todos: 'todos',
            media: 'media'
        })
    },

    methods: {
       ...mapMutations(['changeMedia'])
    }
}

</script>