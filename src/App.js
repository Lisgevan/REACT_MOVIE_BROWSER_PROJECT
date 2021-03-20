//Import dependencies
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import pages
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";

//Import various
import "./App.css";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState("searching for...");

	return (
		<>
			<NavBar />
			<Switch>
				{/* First way of writing the Route */}
				<Route path="/" exact>
					<Home />
				</Route>
				{/* Second way of writing the Route */}
				<Route path="/about" component={AboutView} />
				<Route path="/search">
					<SearchView keyword={searchText} searchResults={searchResults} />
				</Route>
			</Switch>
		</>
	);
}

export default App;
