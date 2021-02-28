import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="col-sm-4" styles="width: 18rem;">
			<img src={props.pic} className="card-img-top"></img>
			<div className="card-body text-center">
				<p className="card-text text-center">{props.name}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
