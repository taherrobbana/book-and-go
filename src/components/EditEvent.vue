<template>
  <q-dialog
    :model-value="popupOpen"
    @update:model-value="closeDialog"
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
          <slot>{{
            mode === "edit"
              ? "Modifier " + eventToEdit.title
              : "Creer la nouvel event"
          }}</slot>
        </q-span>
        <q-btn flat round icon="clear" @click="closeDialog" />
      </div>

      <div
        style="
          min-width: 500px;
          padding: 10px;
          display: flex;
          flex-direction: column;
        "
      >
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> Title </label>
          <q-input dense outlined v-model="eventToEdit.title" label="Title">
          </q-input>
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> Discription </label>
          <q-input
            dense
            outlined
            v-model="eventToEdit.discription"
            label="Discription"
          >
          </q-input>
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> Start </label>
          <q-input
            dense
            outlined
            :model-value="formatDateTime(eventToEdit.start)"
            @update:model-value="updateDateTime"
            label="Start"
            type="text"
            mask="####-##-## ##:##"
            readonly
          >
            <template v-slot:append>
              <!-- <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date
                    v-model="datePart"
                    mask="YYYY-MM-DD HH:mm"
                    @update:model-value="updateDate"
                  />
                </q-popup-proxy>
              </q-icon> -->
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time
                    v-model="timePartStart"
                    mask="YYYY-MM-DD HH:mm"
                    format24h
                    @update:model-value="updateTimeStart"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div style="padding: 10px; display: flex; flex-direction: column">
          <label> End </label>
          <q-input
            dense
            outlined
            :model-value="formatDateTime(eventToEdit.end)"
            @update:model-value="updateDateTime"
            label="End"
            type="text"
            mask="####-##-## ##:##"
            readonly
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time
                    v-model="timePartEnd"
                    mask="YYYY-MM-DD HH:mm"
                    format24h
                    @update:model-value="updateTimeEnd"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div
        style="
          background-color: #f7f7f7;
          display: flex;
          justify-content: end !important;
          width: 100%;
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
import { formatDate2 } from "@/utils";
import { ref } from "vue";

@Options({
  components: {},
  props: ["popupOpen", "persistent", "fullHeight", "eventToEdit", "mode"],
})
export default class EditEvent extends Vue {
  popupOpen?: boolean;
  persistent?: boolean;
  fullHeight?: boolean;
  eventToEdit?: any;
  mode?: string;
  dateFrom: any = null;



  formatDate2 = formatDate2;

  @Emit("closeDialog")
  closeDialog() {}

  // Dans la partie script
//   get datePart() {
//     return this.eventToEdit.start
//       ? formatDate2(this.eventToEdit.start, "YYYY/MM/DD")
//       : "";
//   }

  get timePartStart() {
    return this.eventToEdit.start
      ? formatDate2(this.eventToEdit.start, "HH:mm")
      : "";
  }
  get timePartEnd() {
    return this.eventToEdit.end
      ? formatDate2(this.eventToEdit.end, "HH:mm")
      : "";
  }
  formatDateTime(date: Date) {
    if (!date) return "";
    return formatDate2(date, "YYYY-MM-DD HH:mm");
  }

  updateDateTime(value: string) {
    if (!value || !this.eventToEdit) return;

    // 1. Parser la chaîne entrée
    const [datePart, timePart] = value.split(" ");
    const [year, month, day] = datePart?.split("-") || [];
    const [hours, minutes] = timePart?.split(":") || ["00", "00"];

    // 2. Valider les valeurs
    if (!year || !month || !day) return;

    // 3. Créer la nouvelle date
    const newDate = new Date(
      parseInt(year),
      parseInt(month) - 1, // Les mois sont 0-indexés
      parseInt(day),
      parseInt(hours) || 0,
      parseInt(minutes) || 0
    );

    // 4. Vérifier que la date est valide
    if (isNaN(newDate.getTime())) {
      console.error("Date invalide:", value);
      return;
    }

    // 5. Mettre à jour le modèle
    this.eventToEdit.start = newDate;

    // 6. Forcer la mise à jour de l'affichage si nécessaire
    this.$nextTick(() => {
      // Logique supplémentaire si besoin
    });
  }
  updateDate(date: string) {
    if (!this.eventToEdit.start) return;
    const [year, month, day] = date.split("/");
    const newDate = new Date(this.eventToEdit.start);
    newDate.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));
    this.eventToEdit.start = newDate;
  }

  updateTimeStart(time: string) {
    if (!this.eventToEdit.start) return;
    const [hours, minutes] = time.split(":");
    const newDate = new Date(this.eventToEdit.start);
    newDate.setHours(parseInt(hours), parseInt(minutes));
    this.eventToEdit.start = newDate;
  }
  updateTimeEnd(time: string) {
    if (!this.eventToEdit.end) return;
    const [hours, minutes] = time.split(":");
    const newDate = new Date(this.eventToEdit.end);
    newDate.setHours(parseInt(hours), parseInt(minutes));
    this.eventToEdit.end = newDate;
  }
}
</script>

<style>
.q-dialog__inner--minimized {
  padding: 0 !important;
}
</style>
