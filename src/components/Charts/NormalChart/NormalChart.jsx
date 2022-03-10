import React from "react";
import { Paper, Typography } from "@mui/material";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import "./normal-chart.scss";

const data = [
	{
		name: "January",
		Food: 4000,
		Medicine: 2400,
		Books: 2400,
	},
	{
		name: "February",
		Food: 3000,
		Medicine: 1398,
		Books: 2210,
	},
	{
		name: "March",
		Food: 2000,
		Medicine: 9800,
		Books: 2290,
	},
	{
		name: "April",
		Food: 2780,
		Medicine: 3908,
		Books: 2000,
	},
	{
		name: "May",
		Food: 1890,
		Medicine: 4800,
		Books: 2181,
	},
	{
		name: "June",
		Food: 2390,
		Medicine: 3800,
		Books: 2500,
	},
	{
		name: "July",
		Food: 3490,
		Medicine: 4300,
		Books: 2100,
	},
	{
		name: "August",
		Food: 5324,
		Medicine: 4325,
		Books: 4924,
	},
	{
		name: "September",
		Food: 4092,
		Medicine: 2989,
		Books: 4242,
	},
	{
		name: "October",
		Food: 2942,
		Medicine: 2094,
		Books: 4214,
	},
	{
		name: "November",
		Food: 2994,
		Medicine: 4021,
		Books: 9294,
	},
];

const Chart = () => {
	return (
		<Paper elevation={3} className='normal-chart'>
			<Typography
				textAlign='center'
				variant='h6'
				gutterBottom
				color='text.secondary'>
				Last 11 Months (Revenue)
			</Typography>
			<ResponsiveContainer width='100%' aspect={2 / 1}>
				<AreaChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />

					<Tooltip />
					<Area
						type='monotone'
						dataKey='Food'
						stackId='1'
						stroke='#8884d8'
						fill='#8884d8'
					/>
					<Area
						type='monotone'
						dataKey='Medicine'
						stackId='1'
						stroke='#82ca9d'
						fill='#82ca9d'
					/>
					<Area
						type='monotone'
						dataKey='Books'
						stackId='1'
						stroke='#ffc658'
						fill='#ffc658'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</Paper>
	);
};

export default Chart;
