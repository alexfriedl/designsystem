import Vue from 'vue'
import Vuex from 'vuex'
import json from './data.json'

Vue.use(Vuex)

const store = {
    state: {
        items: json.items,
        drawer: true
    },
    getters: {
        allItems: state => {
            return state.items
        },
        getDrawer: state => {
            return state.drawer
        }
    },
    mutations: {
        'drawer:toggle': state => {
            state.drawer = !state.drawer
        }
    }
}

export default new Vuex.Store({
    modules: {
        store: store
    }
});