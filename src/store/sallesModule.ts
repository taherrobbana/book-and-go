import { RootState, UserPreferencesState } from "@/types";
import { Module } from "vuex";
import { getSalles } from "./sallesService";
const sallesModule: Module<any, RootState> = {
    namespaced: true,
    state: {
        salles: [],
        language: 'fr'
    },
    getters: {
        getLanguageInit(state) {
            return {
                language: state.language
            }
        },
        getSalles(state) {
            return state.salles;
        }
    },
    actions: {
        setLanguage({ commit }, payload) {
            commit('setLanguage', payload);
        },
        async getSalles({ commit }) {
            const salles = await getSalles();
            commit('setSalles', salles);
        }
    },
    mutations: {
        setLanguage(state, payload) {
            state.language = payload;
        },
        setSalles(state, payload) {
            state.salles = payload;
        }
    }
};
export default sallesModule;

