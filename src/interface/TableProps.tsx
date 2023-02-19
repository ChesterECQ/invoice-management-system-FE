import { GridColDef } from '@mui/x-data-grid';

export default interface DataTableProps {
    rows: any[];
    columns: GridColDef[];
    pageSize?: number;
    rowsPerPageOptions?: number[];
    tableName?: string;
}