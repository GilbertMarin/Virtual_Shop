import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Col, Row } from "react-bootstrap";

export const FooterMenu = () => {
	return (
		<footer className="bg-dark text-center text-white mt-5">
			<Container className="container p-4">
				<section className="mb-4">
					<Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
						<i className="fab fa-facebook-f" />
					</Link>

					<Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
						<i className="fab fa-twitter" />
					</Link>

					<Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
						<i className="fab fa-google" />
					</Link>

					<Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
						<i className="fab fa-instagram" />
					</Link>

					<Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
						<i className="fab fa-github" />
					</Link>
				</section>
				<Link className="btn-floating m-1" href="#!" type="button">
					<Image
						width={90}
						height={45}
						src="http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png"
					/>
				</Link>
			</Container>
		</footer>
	);
};
