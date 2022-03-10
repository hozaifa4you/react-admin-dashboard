import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { load } from "webfontloader";

import "./App.scss";
import { Home, List, Login, New, Single } from "./pages";

const App = () => {
	useEffect(() => {
		load({
			google: {
				families: ["Roboto", "Staatliches"],
			},
		});
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='users'>
							<Route index element={<List />} />
							<Route path=':userId' element={<Single />} />
							<Route path='new' element={<New />} />
						</Route>
					</Route>
					<Route path='products'>
						<Route index element={<List />} />
						<Route path=':productId' element={<Single />} />
						<Route path='new' element={<New />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
