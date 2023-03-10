import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', minWidth: 50, },
    {
        field: 'slot1', headerName: 'Slot 1', minWidth: 50, type: 'number', sortable: false,
    },
    {
        field: 'slot2', headerName: 'Slot 2', minWidth: 50, type: 'number', sortable: false,
    },
    {
        field: 'slot3',
        headerName: 'Slot 3',
        type: 'number',
        minWidth: 50,
        sortable: false,
    },
    {
        field: 'time',
        headerName: 'Time',
        sortable: true,
        type: 'Date',
        width: 200,
    },
];

let rows = [
    { id: 1, slot1: 'X', slot2: 'Y', slot3: 'Z', time: '19:24:38 ' },

];

export default function DataTable() {
    rows = JSON.parse(localStorage.getItem('rows'))

    return (
        <div className='data-table'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                autoPageSize
            />
        </div>
    );
}
