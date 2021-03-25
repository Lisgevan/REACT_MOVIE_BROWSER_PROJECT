//Import dependencies
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import PageNotFound from "./components/Page404";
import ProjectBugs from "./components/ProjectBugs";

//Import various
import "./App.css";

function App() {
	const [searchResults, setSearchResults] = useState([1]);
	const [searchText, setSearchText] = useState("");
	const [inputText, setInputText] = useState("");

	useEffect(() => {
		if (searchText) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=667f0e9f7b7068786c2f9dfc3b1d0379&language=en-US&query=${searchText}&page=1&include_adult=false`
			)
				.then(response => response.json())
				.then(data => {
					setSearchResults(data.results);
				});
		}
	}, [searchText]);

	return (
		<>
			<NavBar
				searchText={searchText}
				setSearchText={setSearchText}
				inputText={inputText}
				setInputText={setInputText}
			/>
			<Switch>
				{/* First way of writing the Route */}
				<Route path="/" exact>
					<Home />
				</Route>
				{/* Second way of writing the Route */}
				<Route path="/about" exact component={AboutView} />

				<Route path="/search" exact>
					<SearchView keyword={searchText} searchResults={searchResults} />
				</Route>
				<Route path="/movies/:id" component={MovieView} />
				<Route path="/projectbugs" component={ProjectBugs} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</>
	);
}

export default App;
