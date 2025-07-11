<template>
  <q-layout view="hhh lpr ffr">
    <Header
      @toggleLeftDrawer="toggleLeftDrawer"
      v-if="isUserLoggedIn && isRouteActive"
    />
    <q-drawer
      v-if="isUserLoggedIn && isRouteActive"
      class="bg-none tw-side-nav"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
    >
      <SideBar />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import SideBar from "./components/SideBar.vue";
import Header from "./components/Header.vue";
import store from "@/store";
import router from "@/router";

export default {
  components: {
    SideBar,
    Header,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    isUserLoggedIn() {
      return true;
    },
    isRouteActive() {
      return (
        this.$route.fullPath !== "/login" && this.$route.fullPath !== "/signin"
      );
    },
  },
};
</script>
<style lang="scss">
.q-drawer {
  position: fixed !important;
}
</style>
