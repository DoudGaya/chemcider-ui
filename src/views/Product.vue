<template>
<div class=" flex flex-col">
  <div class="  w-[1000px] px-20 mx-auto pt-10">
    <div class=" flex flex-row h-[250px] items-end space-x-4">
      <div class="w-[250px] overflow-hidden rounded-lg flex-none h-[250px]">
        <img :src="image" class=" w-full h-full object-cover" alt="" srcset="" />
      </div>
      <div class=" flex flex-col space-y-4  w-full">
        <!-- header text -->
        <div class=" border-b-2 pb-4 border-gray-800">
          <h1 class=" text-4xl">Lorem ipsum dolor sit amet. Lorem Lorem</h1>
        </div>
        <!-- description text -->
        <div class="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cumque distinctio est nesciunt cum voluptas eaque, beatae, ducimus reprehenderit quas itaque! Maiores, doloribus corrupti veritatis delectus ipsam voluptate et iusto!</p>
        </div>
        
      </div>
    </div>
    <div class="">
      Somth
    </div>
  </div>

</div>
</template>

<script>
import {mapState} from 'vuex'
export default {

  computed: {
    ...mapState({
      image: 'product'
    })
  }

}
</script>

<style>

</style>