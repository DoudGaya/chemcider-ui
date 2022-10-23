<template>
 <div class="w-10/12 mx-auto h-dull bg-pink-300 px-10 space-y-10  justify-around">
 </div>
</template>

<script>

import img1 from '../assets/images/users/1.jpeg'
import img2 from '../assets/images/users/2.png'
// import img3 from '../assets/images/users/3.png'
// import img4 from '../assets/images/users/4.jpg'
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

        // {
        //   id: 3,
        //   name: 'Yusuf Babagana',
        //   specialization: 'Organic Chemistry',
        //   location: 'Kano',
        //   img: img3,
        //   about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
        //   articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        // },

        // {
        //   id: 4,
        //   name: 'Idris Sulaiman',
        //   specialization: 'Organic Chemistry',
        //   location: 'Kano',
        //   img: img4,
        //   about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
        //   articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        // },

        // {
        //   id: 5,
        //   name: 'Nafiu Abdullahi',
        //   specialization: 'Organic Chemistry',
        //   location: 'Kano',
        //   img: img2,
        //   about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
        //   articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        // },

        // {
        //   id: 6,
        //   name: 'Salma Rabiu',
        //   specialization: 'Organic Chemistry',
        //   location: 'Kano',
        //   img: img2,
        //   about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio. Tempora, libero? Fuga perferendis maxime dolorum, asperiores ut distinctio corrupti?',
        //   articles: ['Benzene Synthesis', 'Safonification', 'Alkylation', 'Polymerization']
        // },

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