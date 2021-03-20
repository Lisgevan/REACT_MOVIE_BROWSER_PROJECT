//Import components
import Hero from "./Hero";

const Home = () => {
	return (
		<>
			<Hero text="Welcome to React 201" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-2 my-5">
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, reiciendis,
							recusandae officia dignissimos molestias ea pariatur tempora iusto consequuntur
							reprehenderit laborum odit laudantium, assumenda doloremque.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
