//Import dependencies
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//Import components
import Hero from "./Hero";
import PageNotFound from "./Page404";

//import files
import noPicture from "../no_picture.jpg";
import "../App.css";

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=667f0e9f7b7068786c2f9dfc3b1d0379&language=en-US`)
			.then(response => response.json())
			.then(data => {
				setMovieDetails(data);
				setIsLoading(false);
			});
	}, [id]);

	const MovieProdComp = ({ movie }) => {
		return (
			<>
				<li>{movie.name}</li>
			</>
		);
	};

	function renderMovieDetails() {
		if (isLoading) {
			return <Hero text="loading..." />;
		}
		if (movieDetails) {
			const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
			const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
			const movieOverview = movieDetails.overview;
			const movieId = movieDetails.id;
			const movieCompanies = movieDetails.production_companies;
			const movieCountries = movieDetails.production_countries;

			const resultsCompHTML = movieCompanies ? (
				movieCompanies.map((obj, i) => {
					return <MovieProdComp movie={obj} key={i} />;
				})
			) : (
				<PageNotFound />
			);

			const resultsCntrHTML = movieCountries ? (
				movieCountries.map((obj, i) => {
					return <MovieProdComp movie={obj} key={i} />;
				})
			) : (
				<PageNotFound />
			);

			return (
				<>
					{movieId == id ? (
						<>
							<Hero text={movieDetails.original_title} backdrop={backdropUrl} />
							<div className="container my-5">
								<div id="details" className="row">
									<div className="col-md-3">
										{posterPath !== "https://image.tmdb.org/t/p/w500null" ? (
											<img
												src={posterPath}
												className="card-img-top"
												alt={movieDetails.original_title}
											/>
										) : (
											<img
												src={noPicture}
												className="card-img-top "
												alt={movieDetails.original_title}
											/>
										)}
									</div>
									<div className="col-md-9">
										<span>
											<h2>{movieDetails.original_title}</h2>
											{movieDetails.release_date ? (
												<p id="detailsP">({movieDetails.release_date})</p>
											) : (
												"-/-/-"
											)}

											<hr />
										</span>

										{movieOverview ? (
											<p className="leed">{movieDetails.overview}</p>
										) : (
											<p className="leed">No overview available.</p>
										)}
										<ul>
											<li>
												<u>Production companies:</u>
												{resultsCompHTML.length > 0 ? (
													<ol>{resultsCompHTML}</ol>
												) : (
													<span>
														<br />
														No details available.
													</span>
												)}
											</li>
											<li>
												<u>Production countries:</u>
												{resultsCntrHTML.length > 0 ? (
													<ol>{resultsCntrHTML}</ol>
												) : (
													<span>
														<br />
														No details available.
													</span>
												)}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</>
					) : (
						<PageNotFound />
					)}
				</>
			);
		}
	}

	return renderMovieDetails();
};

export default MovieView;
