//import components
import Hero from "./Hero";
import Mypicture from "../mantest.jpg";

const AboutView = () => {
	return (
		<>
			<Hero text="About us" />
			<div className="container">
				<div className="card my-5" style={{ width: "100%", height: "auto" }}>
					<div className="row g-5">
						<div className="col-md-4 d-fluid">
							<img src={Mypicture} alt="..." style={{ width: "100%", height: "100%" }} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">About us</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam nam
									expedita enim, amet totam. Earum vitae sed qui eaque quas, aliquid maiores
									perspiciatis, iure perferendis rerum quae fugit sint. Et fuga veritatis doloremque
									esse nesciunt ipsa omnis atque maiores aliquid ipsum, neque architecto quisquam id
									dolorem dicta sapiente laboriosam.
								</p>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam nam
									expedita enim, amet totam. Earum vitae sed qui eaque quas, aliquid maiores
									perspiciatis, iure perferendis rerum quae fugit sint. Et fuga veritatis doloremque
									esse nesciunt ipsa omnis atque maiores aliquid ipsum, neque architecto quisquam id
									dolorem dicta sapiente laboriosam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutView;
