<template>
  <q-dialog
    :model-value="rightDrawerOpen"
    @update:model-value="closeDialog"
    :position="position"
    :persistent="persistent"
    :full-height="fullHeight"
  >
    <div style="background: white; min-width: 200px">
      <div
        class="text-right bg-white"
        style="
          padding: 5px;
          display: flex;
          justify-content: space-between;
          align-items: anchor-center;
          position: sticky !important;
          top: 0;
          box-shadow: 0px 2px 5px 0px #ccc;
        "
      >
        <q-span class="text-h6">
          <slot>Dialog Title</slot>
        </q-span>
        <q-btn flat round icon="clear" @click="closeDialog" />
      </div>
      <component :is="component" v-bind="props" />
      <div
        class="bg-white"
        style="
          display: flex;
          justify-content: end !important;
          position: absolute;
          width: 100%;
          bottom: 0;
          z-index: 1;
          padding: 5px;
          box-shadow: 0px -2px 5px 0px #ccc;
        "
      >
        <q-btn no-caps outline color="primary" label="Cancel" class="q-mr-sm"/>
        <q-btn no-caps color="primary" label="Confirm" class="q-mr-sm"/>
      </div>
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Notify } from "quasar";
import { Emit } from "vue-property-decorator";

@Options({
  components: {},
  props: [
    "rightDrawerOpen",
    "persistent",
    "position",
    "fullHeight",
    "component",
  ],
})
export default class Dialog extends Vue {
  rightDrawerOpen?: boolean;
  persistent?: boolean;
  position?: string;
  fullHeight?: boolean;
  component?: any;

  @Emit("closeDialog")
  closeDialog() {}
}
</script>

<style>
.q-dialog__inner--minimized {
  padding: 0 !important;
}
</style>
