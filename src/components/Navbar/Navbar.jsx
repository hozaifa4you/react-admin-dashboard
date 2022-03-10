import React from "react";
import { AppBar, Box, Toolbar, IconButton, Avatar, Badge } from "@mui/material";
import {
	GTranslate,
	NightsStay,
	Fullscreen,
	Notifications,
	List,
	Mail,
} from "@mui/icons-material";

import "./navbar.scss";
import { Search } from "../index";

const Navbar = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' color='inherit'>
					<Toolbar component='div'>
						{/* search */}
						<Search />
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							{/* dictionary */}
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'>
								<GTranslate color='primary' />
							</IconButton>
							{/* night mode */}
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'>
								<NightsStay color='primary' />
							</IconButton>
							{/* full screen */}
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'>
								<Fullscreen color='primary' />
							</IconButton>
							{/* notifications */}
							<IconButton
								size='large'
								aria-label='show 17 new notifications'
								color='inherit'>
								<Badge badgeContent={17} color='error'>
									<Notifications color='primary' />
								</Badge>
							</IconButton>
							{/* mail */}
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'>
								<Badge badgeContent={4} color='error'>
									<Mail color='primary' />
								</Badge>
							</IconButton>
							{/* list */}
							<IconButton
								size='large'
								aria-label='show 17 new notifications'
								color='inherit'>
								<List color='primary' />
							</IconButton>
							{/* Avatar */}
							<IconButton
								size='large'
								edge='end'
								aria-label='account of current user'
								aria-haspopup='true'
								color='inherit'>
								<Avatar
									src=''
									sx={{ width: 30, height: 30 }}
									color='primary'
								/>
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
