<template>
 <div class=" w-10/12 mx-auto space-y-10 flex my-10 justify-around flex-col ">

  <div class="grid grid-cols-8 gap-6  ">
    <div class=" col-span-2">
      <div class="bg-white rounded-md px-4 py-10 flex space-y-4 flex-col">
        <a href="" class="flex hover:bg-slate-200 py-2 px-2 rounded-md items-center space-x-4 text-xl">
          <img class=" h-8 w-8" src="../assets/images/periodic_table.png" alt="">
          <p>Periodic Table</p>
        </a>

        <a href="" class="flex hover:bg-slate-200 py-2 px-2 rounded-md items-center space-x-4 text-xl">
          <img class=" h-8 w-8" src="../assets/images/article.png" alt="">
          <p>Articles</p>
        </a>

        <a href="" class="flex hover:bg-slate-200 py-2 px-2 rounded-md items-center space-x-4 text-xl">
          <img class=" h-8 w-8" src="../assets/images/chemicals.png" alt="">
          <p>Products </p>
        </a>

        <a href="" class="flex hover:bg-slate-200 py-2 px-2 rounded-md items-center space-x-4 text-xl">
          <img class=" h-8 w-8" src="../assets/images/community.png" alt="">
          <p>Periodic Table</p>
        </a>

      </div>
    </div>

      <div class="col-span-4 flex space-y-3  flex-col">
        <!-- the search section  -->
       <div class="">
        <div class=" bg-white px-10 py-6 rounded-md">
          <div class=" bg-white  border border-gray-200  rounded-xl flex px-4">
            <button class="flex items-center  align-middle  space-x-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              </button>
            <input type="text" class=" w-full py-2 px-3 outline-none rounded-xl">
          </div>
        </div>
       </div>
        <!-- End search Section -->
        <div class="bg-white rounded-md w-full flex flex-col space-y-4 px-10">

                <!-- User Card Here -->
      <div v-for="user in users" :key="user.id" class=" flex flex-col py-6 border-b border-gray-300 px-2">
      <div class=" grid grid-cols-5 ">
          <div class=" col-span-1  flex items-center justify-center">
            <img :src="user.img" class=" rounded-full h-20 w-20 object-cover" alt="">
          </div>
          <div class=" flex flex-col col-span-4 py-4 space-y-2 ">
            <a class=" font-bold text-lg" href="#">{{user.name}}</a>
            <p class=" text-sm">{{user.about}}</p>
          </div>
      </div>
      <div class="flex justify-end px-4 -mt-2">
              <button class="flex space-x-2 items-center hover:bg-gray-200 hover:text-gray-800 px-4 rounded-md py-1">
                <p class="">view</p>
                <svg class="w-5 h-5 stroke-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>

              </button>
            </div>
      </div>
        <!-- End User card here -->


        


        </div>

      </div>
      <div class="col-span-2">
       <div class=" bg-white rounded-md py-4 px-4">
        <p>Another filters here.. </p>
        
       </div>
      </div>
 </div>
  <!-- end of search box -->
 </div>
</template>

<script>

import img1 from '../assets/images/users/1.jpeg'
import img2 from '../assets/images/users/2.png'
import img3 from '../assets/images/users/3.png'
import img4 from '../assets/images/users/4.jpg'
// import img5 from '../assets/images/users/5.JPG'
export default {
  name: 'Community',

  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Abdulrahman Dauda Gaya',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img1,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },

        {
          id: 2,
          name: 'Habib Mustapha',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img2,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },

        {
          id: 3,
          name: 'Yusuf Babagana',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img3,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },

        {
          id: 4,
          name: 'Idris Sulaiman',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img4,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },

        {
          id: 5,
          name: 'Nafiu Abdullahi',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img2,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },

        {
          id: 6,
          name: 'Salma Rabiu',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img2,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },

        {
          id: 7,
          name: 'Amena Usman',
          specialization: 'Organic Chemistry',
          location: 'Kano',
          img: img1,
          about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
          articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        },
      ]
    }
  }
}
</script>

<style>

</style>