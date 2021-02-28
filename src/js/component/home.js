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
				<Card
					name="1. Some quick example text to build on the card title and make up the bulk of the cards content."
					pic="https://i.pinimg.com/236x/32/7a/8d/327a8ddacdc5fa126f12f8d6990ab40d.jpg"
				/>
				<Card
					name="2. Some quick example text to build on the card title and make up the bulk of the cards content."
					pic="https://i.pinimg.com/236x/2c/d7/54/2cd7549e42230b4605070ef97f3af556.jpg"
				/>
				<Card
					name="3. Some quick example text to build on the card title and make up the bulk of the cards content."
					pic="https://i.pinimg.com/236x/4f/9a/66/4f9a66dfb868ba5e3ee465ac1b87f639.jpg"
				/>
			</div>
			<Footer />
		</div>
	);
}
