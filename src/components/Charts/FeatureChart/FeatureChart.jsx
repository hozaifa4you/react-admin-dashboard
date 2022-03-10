import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./feature-chart.scss";

const FeatureChart = () => {
	return (
		<Paper elevation={3} className='features'>
			<Box display='flex' justifyContent='space-between' component='div'>
				<Typography
					variant='h5'
					component='h2'
					color='text.secondary'
					fontFamily='Cascadia Code'>
					Total Revenue -{">"}
				</Typography>
				<IconButton>
					<MoreVert fontSize='medium' color='text.secondary' />
				</IconButton>
			</Box>
			<Box
				justifyContent='center'
				component='div'
				display='flex'
				flexDirection='column'
				alignItems='center'
				gap={1}>
				<Box component='div' className='feature-chart'>
					<CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
				</Box>
				<Typography variant='button' component='p' color='text.secondary'>
					Total sales made today
				</Typography>
				<Typography
					color='text.primary'
					variant='button'
					component='p'
					fontSize={30}
					fontFamily='FiraCode NF'>
					$420.49k
				</Typography>
				<Typography
					color='text.secondary'
					variant='body1'
					component='p'
					textAlign='center'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
					sunt!
				</Typography>
				<Box
					display='flex'
					justifyContent='space-between'
					className='nested-progress'>
					<Box>
						<Typography
							gutterBottom
							color='primary'
							component='p'
							textAlign='center'>
							Target
						</Typography>
						<Typography
							component='p'
							color='rgb(245, 0, 87)'
							fontFamily='FiraCode NF'
							textAlign='center'>
							423.53k
						</Typography>
					</Box>
					<Box>
						<Typography
							gutterBottom
							color='primary'
							component='p'
							textAlign='center'>
							Last Week
						</Typography>
						<Typography
							component='p'
							color='secondary'
							fontFamily='FiraCode NF'
							textAlign='center'>
							323.03k
						</Typography>
					</Box>
					<Box>
						<Typography
							gutterBottom
							color='primary'
							component='p'
							textAlign='center'>
							Last Month
						</Typography>
						<Typography
							component='p'
							color='rgb(84, 214, 44)'
							fontFamily='FiraCode NF'
							textAlign='center'>
							313.07k
						</Typography>
					</Box>
				</Box>
			</Box>
		</Paper>
	);
};

export default FeatureChart;
