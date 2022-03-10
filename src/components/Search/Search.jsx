import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import "./search.scss";

const Search = () => {
	return (
		<Paper
			component='div'
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: 400,
			}}
			elevation={0}
			className='paper'>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search Products or Users'
				inputProps={{ "aria-label": "search on site" }}
				color='primary'
			/>
			<IconButton type='button' sx={{ p: "10px" }} aria-label='search'>
				<SearchIcon color='primary' />
			</IconButton>
		</Paper>
	);
};

export default Search;
