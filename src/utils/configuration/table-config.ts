export const sallesListCols = [

    {
        name: "name",
        label: "Name",
        align: "center",
        field: (row: { name: string }) => row.name,
        sortable: true,
    },
    {
        name: "building",
        label: "Building",
        align: "center",
        field: (row: { building: string }) => row.building,
        sortable: true,
    },
    {
        name: "capacity",
        label: "Capacity",
        align: "center",
        field: (row: { capacity: number }) => row.capacity,
        sortable: true,
    },
    {
        name: "whiteboard",
        label: "Whiteboard",
        align: "center",
        field: (row: { whiteboard: boolean }) => row.whiteboard,
        sortable: true,
    },
    {
        name: "projector",
        label: "Projector",
        align: "center",
        field: (row: { projector: boolean }) => row.projector,
        sortable: true,
    },

];


