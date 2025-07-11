<template>
  <q-header
    reveal
    elevated
    class="bg-grey-1 text-primary"
    :class="isDarkActive ? 'bg-grey-9 text-white' : ''"
  >
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('toggleLeftDrawer')" />
      <q-toolbar-title>
        <div class="header">
          <div class="logo-container">
            <img src="../assets/sesameLogo.png" class="sesame-logo" />
          </div>
          <div>
            <q-btn
              flat
              no-caps
              color="primary"
              @click="changeLanguage"
              icon="translate"
              :label="
                getLanguage === 'fr'
                  ? 'Switch to English'
                  : 'Passer en Français'
              "
              class="q-mr-sm"
            />
            <q-btn
              flat
              round
              :icon="
                numberOfNotifications > 0
                  ? 'notifications_active'
                  : 'notifications'
              "
              class="q-ml-xs"
            >
              <q-badge
                v-if="numberOfNotifications > 0"
                rounded
                color="red"
                floating
                :label="numberOfNotifications"
                class="q-mt-xs"
              />
            </q-btn>
            <q-btn flat round class="q-ml-xs" @click="darkMode()">
              <transition name="icon" mode="out-in">
                <q-icon
                  :key="isDarkActive ? 'moon' : 'sun'"
                  :name="isDarkActive ? 'brightness_2' : 'wb_sunny'"
                  class="icon-transition"
                />
              </transition>
            </q-btn>
            <q-btn flat round icon="account_circle" class="q-ml-xs" />
            <q-btn flat round icon="logout" class="q-ml-xs" @click="logout" />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "vue-cal/dist/vuecal.css";
import store from "@/store";
import router from "@/router";
import { Dark } from "quasar";

export default class Header extends Vue {
  numberOfNotifications = 2;

  get getLanguage() {
    return store.getters["userPreferencesModule/getLanguage"];
  }

  darkMode() {
    Dark.toggle();
    // Dark.set("auto")
  }
  get isDarkActive() {
    return Dark.isActive;
  }

  changeLanguage() {
    const newLanguage = this.getLanguage === "fr" ? "en" : "fr";
    store.dispatch("userPreferencesModule/setLanguage", newLanguage);
  }

  logout() {
    router.push("/login");
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Espace entre le logo et le texte */
  padding-left: 15px;
  padding-right: 15px;
}

.sesame-logo {
  width: 88px; /* Taille fixe en largeur */
  height: auto; /* Maintient le ratio */
  max-height: 40px; /* Hauteur maximale */
  object-fit: contain; /* Garantit que l'image ne sera pas déformée */
}

/* Animation de fondu */
.icon-transition {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* État initial (invisible) */
.icon-enter-from,
.icon-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* État final (visible) */
.icon-enter-to,
.icon-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
