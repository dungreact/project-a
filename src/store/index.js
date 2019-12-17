import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        layout: 'grid'
    },
    mutations: {
        changeLayoutToGrid (state) {
            state.layout = 'grid'
        },
        changeLayoutToList (state) {
            state.layout = 'list'
        }
    }
});
