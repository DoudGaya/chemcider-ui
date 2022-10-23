import { createStore } from "vuex";

import product1 from '../assets/images/products/Slide2.jpg'
import product2 from '../assets/images/products/Slide3.jpg'
import product3 from '../assets/images/products/Slide4.jpg'
import product4 from '../assets/images/products/Slide5.jpg'
import product5 from '../assets/images/products/Slide6.jpg'
import product6 from '../assets/images/products/Slide7.jpg'
import product7 from '../assets/images/products/Slide8.jpg'
import product from '../assets/images/products.jpg'





export default createStore({
    state: {
        product: product,
        products: [
            {
                name: 'Benzene AnalaR',
                volume: '500ml',
                price: 200,
                purity: 'AnalaR',
                img: product1,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Toluene',
                volume: '200ml',
                price: 200,
                purity: 'AnalaR',
                img: product2,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Anniline AnalaR',
                volume: '60ml',
                price: 200,
                purity: 'AnalaR',
                img: product3,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Sodium Hydroxide AnalaR',
                volume: '500ml',
                price: 200,
                purity: 'Industrial',
                img: product4,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Sodium Chloride Industrial',
                volume: '500ml',
                price: 200,
                purity: 'Industrial',
                img: product5,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Acetic Acid Industrial',
                volume: '500ml',
                price: 200,
                purity: 'Industrial',
                img: product6,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Acetic Acid AnalaR',
                volume: '500ml',
                price: 200,
                purity: 'AnalaR',
                img: product6,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Acetic Acid AnalaR',
                volume: '500ml',
                price: 200,
                purity: 'AnalaR',
                img: product6,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            },

            {
                name: 'Acetic Acid AnalaR',
                volume: '500ml',
                price: 200,
                purity: 'AnalaR',
                img: product6,
                description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lore'
            }
        ], 

        productsCategories: [
           {
            id: 1,
            name: 'Chemicals',
           },

           {
            id: 2,
            name: 'Labwares',
           },

           {
            id:3,
            name: 'Medicals',
           },

           {
            id: 4,
            name: 'Physics Labs',
           },

           {
            id: 4,
            name: 'Chemistry Labs',
           },

        ]
    },
    mutations: {},
    getters: {

    },
    actions: {},
})