import axios from "axios"

const state = {
   todos: [
    {
        id: 1,
        completed: false,
        todos: 'Go to the store',
    },

    {
        id: 1,
        completed: false,
        todos: 'Learn Vuex',
    },

    {
        id: 1,
        completed: false,
        todos: 'Call meros',
    }
   ] 
}
const getters = {
    getTodos: (state) => state.todos
}
const actions = {}
const mutations = {}


export default {  
    state,
    getters,
    actions,
    mutations
}
    