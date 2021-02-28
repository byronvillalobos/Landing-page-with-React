import React from "react";

//create your first component
export function Card() {
	return (
		<div className="col-sm-4" styles="width: 18rem;">
			<img
				src="https://i.pinimg.com/236x/32/7a/8d/327a8ddacdc5fa126f12f8d6990ab40d.jpg"
				className="card-img-top"></img>
			<div className="card-body text-center">
				<p className="card-text text-center">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
