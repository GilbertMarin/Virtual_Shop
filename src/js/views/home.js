import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Container, Navbar, Form, Buttom, FormControl, Nav } from "react-bootstrap";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Randy!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			Estoy intentando!
		</a>
	</div>
);
