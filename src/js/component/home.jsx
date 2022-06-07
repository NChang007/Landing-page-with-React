import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="row">
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
