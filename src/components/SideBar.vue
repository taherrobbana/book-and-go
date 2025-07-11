<template>
    <q-list style="padding-top: 5px;">
      <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
        @click="route('/home')"
      >
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
          <!-- <q-item-label caption>Liste de salles</q-item-label> -->
        </q-item-section>
      </q-item>
      <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
        @click="route('/salles')"
      >
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Salles</q-item-label>
          <q-item-label caption>Liste de salles</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
        @click="route('/calendar')"
      >
        <q-item-section avatar>
          <q-icon name="today" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Calendar</q-item-label>
          <q-item-label caption> Calendrier des réservations </q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
        @click="route('/users')"
      >
        <q-item-section avatar>
          <q-icon name="group" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Utilisateurs</q-item-label>
          <q-item-label caption> Gestion des utilisateurs </q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
        @click="route('/preferences')"
      >
        <q-item-section avatar>
          <q-icon name="accessibility_new" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Preferences </q-item-label>
          <q-item-label caption> Preferences utilisateur </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import router from "@/router";

export default class SideBar extends Vue {  
  route(path: string) {
    router.push(path);
  }
}
</script>

<style scoped></style>
