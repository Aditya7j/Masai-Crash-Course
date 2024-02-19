import { Route, Router } from "react-router-dom";
import { Home } from "./Pages/Home";

export const App=()=> {
	// DO NOT CHANGE/MODIFY this app-structure here
	return (
		<div data-testid="users-app">
		{/* add AllRoutes here */}
			<Router>
				<Route path="/" element={<Home/>}></Route>
			</Router>
		</div>
	);
}
