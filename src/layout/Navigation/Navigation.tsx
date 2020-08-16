import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

export const Navigation: React.FC<{}> = () => (
	<div className="navigation">
		<div className="logoWrapper">
			<img
				src="https://www.vectorlogo.zone/logos/reactjs/reactjs-card.png"
				height="60"
				alt="logo"
				className="logo"
			/>
		</div>
		<nav>
			<ul className="list">
				<li className="list__item">
					<NavLink className="list__link" exact to="/">
						Home
					</NavLink>
				</li>
			</ul>
		</nav>
	</div>
);
