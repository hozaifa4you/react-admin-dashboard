import React from "react";
import { Container } from "@mui/material";

import "./home.scss";
import {
	Navbar,
	Sidebar,
	Widget,
	FeatureChart,
	NormalChart,
	Transaction,
} from "../../components";

const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home-container'>
				<Navbar />
				{/* widgets */}
				<Container maxWidth='xl' className='widgets'>
					<Widget
						title='Since Last Week'
						type='Balance'
						count={85.87}
						statistic={-98.8}
					/>
					<Widget
						title='Since Last Week'
						type='Orders'
						count={5.3}
						statistic={108.8}
					/>
					<Widget
						title='Since Last Week'
						type='Earning'
						count={359.57}
						statistic={-14.8}
					/>
					<Widget
						title='Since Last Week'
						type='Users'
						count={1.01}
						statistic={76}
					/>
				</Container>
				<Container className='chart-container' maxWidth='xl'>
					<FeatureChart />
					<NormalChart />
				</Container>
				<Container component='div' maxWidth='xl' xs={{ flexGrow: 1 }}>
					<Transaction />
				</Container>
			</div>
		</div>
	);
};

export default Home;
