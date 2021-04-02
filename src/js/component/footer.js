import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const FooterMenu = () => {
	return (
		<footer className="bg-dark text-center text-white">
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
						<i className="fab fa-linkedin-in" />
					</Link>

					<Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
						<i className="fab fa-github" />
					</Link>
				</section>
			</Container>
		</footer>
	);
};
