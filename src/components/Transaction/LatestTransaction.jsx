import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

import "./latest-transaction.scss";
import { Table } from "../index";

const LatestTransaction = () => {
	return (
		<Paper elevation={3} component='div' className='transaction'>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				marginBottom={2}>
				<Typography
					variant='h5'
					component='h2'
					color='text.secondary'
					fontFamily='FiraCode NF'>
					Last 50 Transaction -{">"}
				</Typography>

				<Button
					variant='outlined'
					color='secondary'
					startIcon={<PersonAdd />}>
					New User
				</Button>
			</Box>
			<Box>
				{/* FIXME: */}
				<Table />
			</Box>
		</Paper>
	);
};

export default LatestTransaction;
