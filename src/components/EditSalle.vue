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
          border-bottom: #e5eaee 1px solid;
          background-color: #f7f7f7 !important;
        "
      >
        <q-span class="text-h6">
          <slot
            >{{ $t(title) }} {{ mode === "edit" ? " " + salle.name : "" }}</slot
          >
        </q-span>
        <q-btn flat round icon="clear" @click="closeDialog" />
      </div>
      <div style="min-width: 500px; padding: 10px; display: flex; flex-direction: column">
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> Salle Name </label>
          <q-input dense outlined v-model="salle.name" label="Salle Name">
          </q-input>
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> Building </label>
          <q-input dense outlined v-model="salle.building" label="Building">
          </q-input>
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> Capacity </label>
          <q-input
            dense
            outlined
            v-model="salle.capacity"
            type="number"
            label="Capacity"
          >
          </q-input>
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <q-toggle
            v-model="salle.whiteboard"
            label="Has whiteboard"
            class="q-mt-sm"
          />
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <q-toggle
            v-model="salle.projector"
            label="Has projector"
            class="q-mt-sm"
          />
        </div>
      </div>
      <div
        style="
          background-color: #f7f7f7;
          display: flex;
          justify-content: end !important;
          position: absolute;
          width: 100%;
          bottom: 0;
          z-index: 1;
          padding: 5px;
          border-top: #e5eaee 1px solid;
        "
      >
        <q-btn
          class="q-mr-sm"
          color="primary"
          no-caps
          flat
          push
          label="Cancel"
          @click="closeDialog"
        />
        <q-btn
          no-caps
          color="primary"
          label="Confirm"
          class="q-mr-sm"
          @click=""
        />
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
    "salle",
    "title",
    "mode",
  ],
})
export default class EditSalle extends Vue {
  rightDrawerOpen?: boolean;
  persistent?: boolean;
  position?: string;
  fullHeight?: boolean;
  component?: any;
  salle?: any;
  title?: string;
  mode?: string;

  @Emit("closeDialog")
  closeDialog() {}
}
</script>

<style>
.q-dialog__inner--minimized {
  padding: 0 !important;
}
</style>
