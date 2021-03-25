//imports
import { useHistory, Link, NavLink } from "react-router-dom";

// Write a component using a Function (for navigation bar)
// function NavBar() {
// Second way
// Write a component using a Const (for navigation bar)

const NavBar = ({ searchText, setSearchText, inputText, setInputText }) => {
	const history = useHistory();

	const updateInputText = e => {
		setInputText(e.target.value);
	};

	const searchSubmit = clicked => {
		clicked.preventDefault();
		history.push("/search");
		setSearchText(inputText);
		setInputText("");
	};

	const isActive = {
		fontWeight: "bold",
		backgroundColor: "rgba(177, 174, 174, 0.459)",
		borderRadius: "2em",
		transition: "500",
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Movie Browser
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" exact to="/" activeStyle={isActive}>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about" activeStyle={isActive}>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link " to="/projectBugs" activeStyle={isActive}>
								[Project bugs]
							</NavLink>
						</li>
					</ul>
					<form className="d-flex">
						<input
							id="searchInput"
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							// value={searchText}
							value={inputText}
							// onChange={updateSearchText}
							onChange={updateInputText}
						/>
						<button className="btn btn-outline-success" type="submit" onClick={searchSubmit}>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
