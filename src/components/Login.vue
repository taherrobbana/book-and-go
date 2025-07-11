<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="login-card">
      <q-card-section>
        <div class="text-h5 text-center q-mb-md">Sign in to BookAndGo</div>
        <q-btn color="primary" @click="loginWithSSO" class="full-width">
          <div class="btn-content">
            <img
              src="../assets/microsoft-logo-white-png.png"
              class="btn-image"
              alt="Menu"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            <span>Se connecter avec Microsoft</span>
          </div>
        </q-btn>
        <q-btn
          color="red"
          icon="google"
          @click="loginWithSSO"
          class="full-width q-mt-sm"
        >
          <div class="btn-content">
            <img
              src="../assets/google-logo-white-png.png"
              class="btn-image"
              alt="Menu"
              style="width: 20px; height: 20px; margin-right: 10px"
            />
            <span>Se connecter avec Google</span>
          </div>
        </q-btn>
        <div class="separator-with-label">
          <q-separator />
          <span class="separator-label">or</span>
          <q-separator />
        </div>
        <div class="text-center q-mb-md">
          <span class="sign-on-span">Sign On</span>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
export default class Login extends Vue {
  loginWithSSO() {
    // This method should handle the SSO login logic
    // For example, redirecting to an SSO provider or calling an API
    console.log("SSO login initiated");
  }
}
</script>

<style scoped lang="scss">
.login-card {
  width: 400px;
  padding: 20px;
}
.btn-content {
  display: inline-flex;
  align-items: center;
  gap: 8px; /* Espace entre l'image et le texte */
}

.separator-with-label {
  display: flex;
  align-items: center;
  margin: 16px 0;
}

.separator-label {
  padding: 0 16px;
  color: #9e9e9e; /* Couleur de texte grise */
  font-size: 0.875rem;
}

.q-separator {
  flex-grow: 1;
  background: #e0e0e0; /* Couleur personnalisée si besoin */
}

.sign-on-span {
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
