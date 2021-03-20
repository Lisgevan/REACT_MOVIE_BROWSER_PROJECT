//import components
import Hero from "./Hero";

const AboutView = () => {
	return (
		<>
			<Hero text="About us" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-2 my-5">
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi explicabo perferendis quod
							quos? Illum enim voluptatibus cupiditate quos nulla, mollitia quidem possimus animi
							pariatur.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutView;
