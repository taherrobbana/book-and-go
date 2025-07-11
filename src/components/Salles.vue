<template>
  <div class="myCard">
    <div class="text-h6" style="padding-bottom: 15px">
      {{ $t("salles.filters.filters") }}
    </div>
    <div class="form-grid">
      <div
        class="form-control no-border col-lg-12 col-md-12 col-sm-12 col-xs-12"
      >
        <span style="display: flex" class="d-block mb-0 small text-muted">
          {{ $t("salles.filters.building") }}
        </span>
        <q-select
          v-model="buildingFilter"
          :options="buildings"
          :label="$t('salles.filters.building')"
          outlined
          dense
          class="q-mt-sm"
        />
      </div>
      <div
        class="form-control no-border col-lg-12 col-md-12 col-sm-12 col-xs-12"
      >
        <span style="display: flex" class="d-block mb-0 small text-muted">
          {{ $t("salles.filters.Ability") }}
        </span>
        <q-select
          v-model="capacityFilter"
          :options="capacityOptions"
          :label="$t('salles.filters.Ability')"
          outlined
          dense
          class="q-mt-sm"
        />
      </div>
      <div
        class="form-control no-border col-lg-12 col-md-12 col-sm-12 col-xs-12"
      >
        <span style="display: flex" class="d-block mb-0 small text-muted">
          {{ $t("salles.filters.projector") }}
        </span>
        <q-toggle
          v-model="equipmentFilters"
          val="projector"
          :label="$t('salles.filters.projector')"
          class="q-mt-sm"
        />
      </div>
      <div
        class="form-control no-border col-lg-12 col-md-12 col-sm-12 col-xs-12"
      >
        <span style="display: flex" class="d-block mb-0 small text-muted">
          {{ $t("salles.filters.whiteboard") }}
        </span>
        <q-toggle
          v-model="equipmentFilters"
          val="whiteboard"
          :label="$t('salles.filters.whiteboard')"
          class="q-mt-sm"
        />
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: flex-end !important;
        padding-top: 30px;
      "
    >
      <q-btn
        no-caps
        outline
        color="primary"
        icon="replay"
        :label="$t('salles.filters.resetBtn')"
        class="q-mr-sm"
      >
      </q-btn>
      <q-btn
        no-caps
        color="primary"
        icon="search"
        :label="$t('salles.filters.searchBtn')"
        class="q-mr-sm"
      >
      </q-btn>
    </div>
  </div>
  <div class="myCard">
    <div class="header" style="padding-bottom: 10px">
      <div class="text-h6">{{ $t("salles.list.title") }}</div>
      <q-btn
        no-caps
        color="primary"
        icon="add"
        :label="$t('salles.list.addSalleBtn')"
        class="q-mr-sm"
        @click="addSalle()"
      />
    </div>
    <div style="padding-top: 10px">
      <q-table :rows="filteredSalles" :columns="sallesListCols">
        <template v-slot:top>
          <q-input
            v-model="search"
            @update:model-value="filterSalles()"
            :placeholder="$t('salles.list.searchPlaceholder')"
            outlined
            dense
            class="q-mb-sm"
          />
        </template>
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              <span
                class="text-weight-bold"
                v-if="col.name !== 'actions' && col.name !== 'id'"
              >
                {{ $t(col.label) }}
              </span>
            </q-th>
            <q-th auto-width />
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span
                class=""
                v-if="
                  col.name !== 'actions' &&
                  col.name !== 'id' &&
                  col.name !== 'capacity' &&
                  col.name !== 'whiteboard' &&
                  col.name !== 'projector'
                "
              >
                {{ col.value }}
              </span>
              <q-btn
                v-if="col.name === 'capacity'"
                :color="
                  props.row.capacity <= 5
                    ? 'grey'
                    : props.row.capacity <= 10
                    ? 'orange'
                    : props.row.capacity <= 20
                    ? 'green'
                    : props.row.capacity <= 50
                    ? 'blue'
                    : ''
                "
                size="sm"
                :label="props.row.capacity"
                style="cursor: auto"
              />
              <q-btn
                v-if="col.name === 'whiteboard'"
                flat
                round
                :icon="props.row.whiteboard ? 'check' : 'close'"
                :color="props.row.whiteboard ? 'green' : 'red'"
                class="q-ml-xs"
                style="cursor: auto"
              />
              <q-btn
                v-if="col.name === 'projector'"
                flat
                round
                :icon="props.row.projector ? 'check' : 'close'"
                :color="props.row.projector ? 'green' : 'red'"
                class="q-ml-xs"
                style="cursor: auto"
              />
            </q-td>
            <q-td auto-width>
              <q-btn
                flat
                round
                color="primary"
                icon="edit"
                class="q-ml-xs"
                @click="onEdit(props.row)"
              />
              <q-btn
                flat
                round
                color="negative"
                icon="delete"
                class="q-ml-xs"
                @click="onDelete(props.row)"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
  <EditSalle
    :rightDrawerOpen="rightDrawerOpen"
    :persistent="true"
    :position="'right'"
    :fullHeight="true"
    @closeDialog="closeDialog"
    :salle="salle"
    :title="title"
    :mode="mode"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Notify } from "quasar";
import { sallesListCols } from "@/utils/configuration/table-config";
import Dialog from "./Dialog.vue";
import Calendar from "./Calendar.vue";
import EditSalle from "./EditSalle.vue";

@Options({
  components: {
    Dialog,
    Calendar,
    EditSalle,
  },
})
export default class Salles extends Vue {
  search = "";
  buildingFilter: any;
  capacityFilter: any;
  equipmentFilters = [];
  filteredSalles: any;
  rightDrawerOpen?: boolean = false;
  Calendar = Calendar;
  salle: any = {
    id: 0,
    name: "001",
    building: "",
    capacity: 0,
    projector: false,
    whiteboard: false,
  };
  title?: string
  mode?: string

  created() {
    this.filteredSalles = this.salles;
  }

  get rows() {
    return this.filteredSalles;
  }

  buildings = ["Bâtiment A", "Bâtiment B", "Bâtiment C"];
  capacityOptions = ["5+", "10+", "20+", "50+"];
  salles: any = [
    {
      id: 1,
      name: "Salle A1.05",
      building: "Bâtiment A",
      capacity: 10,
      projector: true,
      whiteboard: true,
    },
    {
      id: 2,
      name: "Salle B2.12",
      building: "Bâtiment B",
      capacity: 20,
      projector: true,
      whiteboard: false,
    },
    {
      id: 3,
      name: "Salle C3.01",
      building: "Bâtiment C",
      capacity: 50,
      projector: false,
      whiteboard: true,
    },
    {
      id: 4,
      name: "Salle C3.01",
      building: "Bâtiment C",
      capacity: 50,
      projector: false,
      whiteboard: true,
    },
    {
      id: 5,
      name: "Salle C3.01",
      building: "Bâtiment C",
      capacity: 50,
      projector: false,
      whiteboard: true,
    },
    {
      id: 6,
      name: "Salle C3.01",
      building: "Bâtiment C",
      capacity: 50,
      projector: false,
      whiteboard: true,
    },
  ];

  sallesListCols = [
    {
      name: "name",
      label: "salles.list.columns.name",
      align: "center",
      field: (row: { name: string }) => row.name,
      sortable: true,
    },
    {
      name: "building",
      label: "salles.list.columns.building",
      align: "center",
      field: (row: { building: string }) => row.building,
      sortable: true,
    },
    {
      name: "capacity",
      label: "salles.list.columns.capacity",
      align: "center",
      field: (row: { capacity: number }) => row.capacity,
      sortable: true,
    },
    {
      name: "whiteboard",
      label: "salles.list.columns.whiteboard",
      align: "center",
      field: (row: { whiteboard: boolean }) => row.whiteboard,
      sortable: true,
    },
    {
      name: "projector",
      label: "salles.list.columns.projector",
      align: "center",
      field: (row: { projector: boolean }) => row.projector,
      sortable: true,
    },
  ];

  onEdit(row: any) {
    this.title = "salles.edit.editSalleTitle";
    this.mode = "edit";
    this.rightDrawerOpen = true;

  }
  addSalle() {
    this.title = "salles.edit.addSalleTitle";
    this.mode = "add";
    this.rightDrawerOpen = true;
  }

  onDelete(row: any) {
    console.log("Delete row:", row);
    Notify.create({
      type: "positive",
      message: `Salle ${row.name} supprimée`,
    });
  }

  filterSalles() {
    console.log("this.search:", this.search);
    console.log("this.salles.length:", this.salles.length);
    console.log("this.filteredSalles.length:", this.filteredSalles.length);
    console.log("this.rows.length:", this.rows.length);
    this.filteredSalles = this.salles.filter((salle: any) => {
      return salle.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  closeDialog() {
    this.rightDrawerOpen = false;
  }
}
</script>

<style scoped lang="scss">
.vue-cal {
  height: 600px;
}
.event-primary {
  background-color: #1976d2;
  color: white;
  border-left: 3px solid #0d47a1;
}
.myCard {
  margin: 16px !important;
  border: 16px !important;
  padding: 32px !important;
  border-radius: 8px !important;
  background-color: #ffffff !important;
}
.body--dark .myCard {
  background-color: #1d1d1d !important;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colonnes égales */
  gap: 16px; /* Espace entre les éléments */
  align-items: center;
}

.form-item {
  width: 100%;
}

/* Responsive - 2 éléments par ligne sur mobile */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Sur très petits écrans - 1 élément par ligne */
@media (max-width: 480px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
