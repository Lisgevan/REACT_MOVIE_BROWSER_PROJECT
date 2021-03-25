//Import components
import { Link } from "react-router-dom";
//Import components
import Hero from "./Hero";
//import files
import noPicture from "../no_picture.jpg";

// TMDB API KEY = 667f0e9f7b7068786c2f9dfc3b1d0379
// Example link for movie searches ==> https://api.themoviedb.org/3/search/movie?api_key=667f0e9f7b7068786c2f9dfc3b1d0379&language=en-US&query=Star%20wars&page=1&include_adult=false

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const detailUrl = `/movies/${movie.id}`;
	return (
		<div className="col-lg-3 col-md-3 col-2 my-4">
			<div className="card">
				{posterUrl !== "https://image.tmdb.org/t/p/w500null" ? (
					<img src={posterUrl} className="card-img-top" alt={movie.original_title} />
				) : (
					<img src={noPicture} className="card-img-top " alt={movie.original_title} />
				)}
				<div className="card-body">
					<h5 className="card-title">{movie.original_title}</h5>
					<Link to={detailUrl} className="btn btn-primary">
						Show details
					</Link>
				</div>
			</div>
		</div>
	);
};

const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;

	const resultsHTML = searchResults.map((obj, i) => {
		return <MovieCard movie={obj} key={i} />;
	});

	return (
		<>
			{keyword ? <Hero text={title} /> : <Hero text="Search for a movie" />}

			{resultsHTML && keyword ? (
				<div className="container">
					<div className="row">{resultsHTML}</div>
				</div>
			) : (
				<></>
			)}

			{resultsHTML.length === 0 && keyword ? (
				<div className="container">
					<div className="row">
						<div className="col-10 offset-1">
							<p className="leed text-center mt-5 fs-1">
								No results found for: <strong>{keyword}</strong>.
							</p>
							<p className="leed text-center fs-1">Please try again.</p>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default SearchView;
