import { createStore } from "vuex";
import { RootState } from "@/types";
import userPreferencesModule from "./userPreferencesModule";
import sallesModule from "./sallesModule";

export default createStore<RootState>({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userPreferencesModule,
    sallesModule
  }
});
