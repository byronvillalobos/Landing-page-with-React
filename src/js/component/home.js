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
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
