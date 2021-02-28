import React from "react";

//import your own components
import { Header } from "./header";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div>
			<Header />
			<Jumbotron />
			<div className="d-flex flex-row">
				<Card name="1. Some quick example text to build on the card title and make up the bulk of the cards content." />
				<Card name="2. Some quick example text to build on the card title and make up the bulk of the cards content." />
				<Card name="3. Some quick example text to build on the card title and make up the bulk of the cards content." />
			</div>
			<Footer />
		</div>
	);
}
