//Import components
import Hero from "./Hero";
import ProjectImg from "../projectImg.jpg";

const Home = () => {
	return (
		<>
			<Hero text='Welcome to the "Movie Browser"' />
			<div className="container">
				<div className="row">
					<div className="col-lg-2 offset-1 my-5">
						<img src={ProjectImg} alt="" style={{ width: "150%", height: "auto" }} />
					</div>
					<div className="col-lg-6 offset-1 my-5 d-flex align-items-center">
						<p className="lead">
							This is a project as part of the Udemy - The Ultimate 2021 Fullstack Web Development
							Bootcamp - Section 15: React 201: Intermediate level React using functional components -
							311. It is a web page based on the
							<a href="https://www.themoviedb.org/"> www.themoviedb.org</a> API to create a movie search
							browser.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
