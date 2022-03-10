import React from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import {
	PeopleAltTwoTone,
	AccountBalanceTwoTone,
	StoreMallDirectoryTwoTone,
	PaidTwoTone,
} from "@mui/icons-material";

import "./widget.scss";

const Widget = ({ title, type, count, statistic }) => {
	let border;

	switch (type) {
		case "Balance": {
			border = "#54D62C";
			break;
		}

		case "Users": {
			border = "#8e24aa";
			break;
		}
		case "Orders": {
			border = "#f50057";
			break;
		}
		case "Earning": {
			border = "#FFC107";
			break;
		}
		default: {
			border = "#000";
			break;
		}
	}
	return (
		<Paper
			className='widget'
			elevation={6}
			style={{ borderBottom: `7px solid ${border}` }}>
			<div className='left'>
				<Typography
					variant='h6'
					fontFamily='FiraCode NF ExtraLight'
					component='h6'
					paddingBottom={2}
					fontWeight='bold'>
					{type}
				</Typography>
				<Typography
					paddingBottom={2}
					color='primary'
					variant='h5'
					component='h5'>
					{type === "Balance" && "$"}
					{type === "Earning" && "$"}
					{count}k
				</Typography>
				<div className='bottom'>
					<Typography
						style={
							statistic > 0
								? {
										padding: "4px",
										background: "rgb(76, 175, 80,0.2)",
										borderRadius: "3px",
								  }
								: {
										padding: "4px",
										background: "rgb(244, 67, 54,.2)",
										borderRadius: "3px",
								  }
						}
						variant='overline'
						component='span'
						marginRight={3}
						fontSize={15}
						color={
							statistic > 0 ? "rgb(76, 175, 80)" : "rgb(244, 67, 54)"
						}>
						{statistic}%
					</Typography>
					<Typography
						component='span'
						fontSize={15}
						variant='subtitle2'
						color={border}
						fontFamily='Cascadia Code'>
						{title}
					</Typography>
				</div>
			</div>
			<div className='right'>
				{type === "Balance" && (
					<IconButton>
						<AccountBalanceTwoTone color='primary' fontSize='large' />
					</IconButton>
				)}
				{type === "Orders" && (
					<IconButton>
						<StoreMallDirectoryTwoTone color='primary' fontSize='large' />
					</IconButton>
				)}
				{type === "Earning" && (
					<IconButton>
						<PaidTwoTone color='primary' fontSize='large' />
					</IconButton>
				)}
				{type === "Users" && (
					<IconButton>
						<PeopleAltTwoTone color='primary' fontSize='large' />
					</IconButton>
				)}
			</div>
		</Paper>
	);
};

export default Widget;
