<template>
  <q-page class="flex flex-center text-center">
    <div>
      <h1 class="text-h1">404</h1>
      <p class="text-h5">{{ $t("main.notFoundPage.message") }}</p>
      <q-btn
        color="primary"
        :label="$t('main.notFoundPage.backToHome')"
        to="/"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class NotFoundPage extends Vue {}
</script>

<style scoped></style>
