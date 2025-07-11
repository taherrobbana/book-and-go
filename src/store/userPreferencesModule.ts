import { RootState, UserPreferencesState } from "@/types";
import { Module } from "vuex";

const userPreferencesModule: Module<UserPreferencesState, RootState> = {
    namespaced: true,
    state: {
        language: 'fr'
    },
    getters: {
        getLanguageInit() {
            return {
                language: 'fr'
            }
        },
        getLanguage(state) {
            return state.language;
        }
    },
    actions: {
        setLanguage({ commit }, payload) {
            commit('setLanguage', payload)
        }
    },
    mutations: {
        setLanguage(state, payload) {
            state.language = payload
        }
    }
}
export default userPreferencesModule;
