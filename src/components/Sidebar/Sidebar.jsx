import React from "react";
import {
	Typography,
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Toolbar,
} from "@mui/material";
import {
	ExpandLess,
	ExpandMore,
	Person,
	Countertops,
	Store,
	LocalShipping,
	HomeWork,
	NotificationsSharp,
	SpaSharp,
	VpnKeySharp,
	Settings,
	AccountCircle,
	Logout,
	Dashboard,
	LightMode,
	DarkMode,
	ColorLens,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import "./sidebar.scss";

const Sidebar = () => {
	const navigator = useNavigate();
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	// navigate to home
	const goHome = () => {
		navigator("/");
	};
	// navigate to users
	const goUsers = () => {
		navigator("/users");
	};

	return (
		<div className='sidebar'>
			<Toolbar className='top' onClick={goHome}>
				<Dashboard fontSize='large' color='primary' />
				<Typography color='primary' component='span' variant='h5'>
					ADC Dashboard
				</Typography>
			</Toolbar>

			<div className='center'>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
					}}
					component='nav'
					aria-labelledby='nested-list-subheader'
					color=''>
					<Typography
						variant='button'
						component='span'
						color='text.primary'>
						Lists
					</Typography>
					{/* users */}
					<ListItemButton onClick={goUsers}>
						<ListItemIcon>
							<Person color='primary' />
						</ListItemIcon>
						<ListItemText primary='Users' />
					</ListItemButton>
					{/* products */}
					<ListItemButton>
						<ListItemIcon>
							<Store color='primary' />
						</ListItemIcon>
						<ListItemText primary='Products' />
					</ListItemButton>
					{/* orders */}
					<ListItemButton>
						<ListItemIcon>
							<Countertops color='primary' />
						</ListItemIcon>
						<ListItemText primary='Orders' />
					</ListItemButton>
					{/* delivery */}
					<ListItemButton>
						<ListItemIcon>
							<LocalShipping color='primary' />
						</ListItemIcon>
						<ListItemText primary='Delivery' />
					</ListItemButton>
					<Divider className='divider-space' />
					<Typography
						variant='button'
						component='span'
						color='text.primary'>
						Useful
					</Typography>
					{/* stats */}
					<ListItemButton>
						<ListItemIcon>
							<HomeWork color='primary' />
						</ListItemIcon>
						<ListItemText primary='Stats' />
					</ListItemButton>
					{/* orders */}
					<ListItemButton>
						<ListItemIcon>
							<NotificationsSharp color='primary' />
						</ListItemIcon>
						<ListItemText primary='Notifications' />
					</ListItemButton>
					<Divider className='divider-space' />
					<Typography
						variant='button'
						component='span'
						color='text.primary'>
						Services
					</Typography>
					{/* system health */}
					<ListItemButton>
						<ListItemIcon>
							<SpaSharp color='primary' />
						</ListItemIcon>
						<ListItemText primary='System Health' />
					</ListItemButton>
					{/* logs */}
					<ListItemButton>
						<ListItemIcon>
							<VpnKeySharp color='primary' />
						</ListItemIcon>
						<ListItemText primary='Logs' />
					</ListItemButton>
					{/* setting */}
					<ListItemButton>
						<ListItemIcon>
							<Settings color='primary' />
						</ListItemIcon>
						<ListItemText primary='Settings' />
					</ListItemButton>
					<Divider className='divider-space' />
					<Typography
						variant='button'
						component='span'
						color='text.primary'>
						Profile
					</Typography>
					{/* profile */}
					<ListItemButton>
						<ListItemIcon>
							<AccountCircle color='primary' />
						</ListItemIcon>
						<ListItemText primary='Profile' />
					</ListItemButton>
					{/* logout */}
					<ListItemButton>
						<ListItemIcon>
							<Logout color='primary' />
						</ListItemIcon>
						<ListItemText primary='Logout' />
					</ListItemButton>
					<Divider className='divider-space' />
					<Typography
						variant='button'
						component='span'
						color='text.primary'>
						Some Options
					</Typography>
					{/* expanses */}
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<ColorLens color={!open ? "primary" : "error"} />
						</ListItemIcon>
						<ListItemText primary='Themes' />
						{open ? <ExpandLess /> : <ExpandMore color='primary' />}
					</ListItemButton>

					<Collapse in={open} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<LightMode color='primary' />
								</ListItemIcon>
								<ListItemText primary='Light' />
							</ListItemButton>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<DarkMode />
								</ListItemIcon>
								<ListItemText primary='Dark' />
							</ListItemButton>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<LightMode color='secondary' />
								</ListItemIcon>
								<ListItemText primary='Secondary' />
							</ListItemButton>
						</List>
					</Collapse>
				</List>
			</div>
			{/* <div className='bottom'></div> */}
		</div>
	);
};

export default Sidebar;
