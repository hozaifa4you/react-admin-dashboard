import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import "./latest-transaction.scss";
import { Table } from "../index";

const LatestTransaction = () => {
	return (
		<Paper elevation={3} component='div' className='transaction'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Typography
					variant='h5'
					component='h2'
					color='text.secondary'
					fontFamily='FiraCode NF'
					gutterBottom>
					Last 50 Transaction -{">"}
				</Typography>
				<IconButton>
					<MoreVert />
				</IconButton>
			</Box>
			<Box>
				{/* FIXME: */}
				<Table />
			</Box>
		</Paper>
	);
};

export default LatestTransaction;
