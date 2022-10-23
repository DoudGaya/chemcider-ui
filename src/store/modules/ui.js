
import { createStore } from 'vuex'

export default createStore({
    state: {
        media: false,

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

    },

    getters: {

        getTodos: (state) => state.todos,

        // changeMedia: (state) => state.media

    },

    mutations: {

        toggleMedia: (state) => {
            state.media = !state.media
            console.log(state.media)
        }

    },

    actions: {

    }
})