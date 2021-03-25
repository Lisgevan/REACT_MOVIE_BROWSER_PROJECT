//Import components
import Hero from "./Hero";

const Home = () => {
	return (
		<>
			<Hero text="Welcome to React 201" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-2 my-5">
						<ol>
							<li className="my-4">
								There is no 404 page.
								<ul className="list-group">
									<li className="list-group-item">
										Created the 404 page that shows message the input url doew not exit.
									</li>
									<li className="list-group-item">
										Works if you type an invalid path at the root or any other path.
									</li>
									<li className="list-group-item">
										Works if you type an invalid id at the /movies/:id path or if the id does not
										exist in the database (try id=1).
									</li>
								</ul>
							</li>

							<li className="my-4">
								Sometimes a search result doesn't have an image.
								<ul className="list-group">
									<li className="list-group-item">
										Added a custom picture for all search results that do not have one.
									</li>
									<li className="list-group-item">Same picture shows at the details of the movie.</li>
								</ul>
							</li>

							<li className="my-4">
								There is no handler if there are no search results.
								<ul className="list-group">
									<li className="list-group-item"> Added no results handler.</li>
									<li className="list-group-item">
										{" "}
										=> If no search key exists shows only Hero with text "Search for a movie"
									</li>
									<li className="list-group-item">
										=> If search key exists but no results, shows Hero with text "Search for 'search
										text'" and a message that "No results found for: 'search text'. Please try
										again.
									</li>
									<li className="list-group-item">
										=> If search key and results exist shows the cards of the results
									</li>
								</ul>
							</li>

							<li className="my-4">
								The search button in the navigation doesn't work.
								<ul className="list-group">
									<li className="list-group-item">Search button now works</li>
									<li className="list-group-item">
										When clicked copies search text and deletes input content
									</li>
									<li className="list-group-item">
										When clicked redirects to search page for the results
									</li>
								</ul>
							</li>

							<li className="my-4">
								Extra fixes.
								<ul className="list-group">
									<li className="list-group-item">
										- Added handler if no overview exists. If none shows some message text.
									</li>
									<li className="list-group-item">
										- Added an active state to the navbar link clicked.
									</li>
									<li className="list-group-item">- Added an hover state to the navbar links.</li>
									<li className="list-group-item">
										- Added more details and handlers if they do not exist.
									</li>
									<li className="list-group-item">
										- Added fake picture and more Lorem at the about us page.
									</li>
									<li className="list-group-item">
										- Added a picture and some text about this project at the home page.
									</li>
								</ul>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
