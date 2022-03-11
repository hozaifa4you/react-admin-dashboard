import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { rows } from "../../utils/table-data";

const columns = [
	{ field: "id", headerName: "ID", width: 60 },
	{
		field: "product",
		headerName: "Product",
		width: 250,
		editable: true,
	},
	{
		field: "image",
		headerName: "Images",
		width: 300,
		editable: true,
	},
	{
		field: "customer",
		headerName: "Customers",
		width: 200,
		editable: true,
	},
	{
		field: "date",
		headerName: "Dates",
		type: "date",
		width: 130,
		editable: true,
	},
	{
		field: "method",
		headerName: "Method",
		width: 140,
		type: "boolean",
		editable: true,
	},
	{
		field: "amount",
		headerName: "Amount",
		width: 150,
		type: "number",
		editable: true,
	},
	{
		field: "status",
		headerName: "Status",
		width: 130,
		type: "boolean",
		editable: true,
	},
];

export default function DataGridDemo() {
	return (
		<div style={{ height: 700, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={11}
				rowsPerPageOptions={[11]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
