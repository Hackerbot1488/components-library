import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

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
				<li className="list__item">
					<NavLink className="list__link" to="/button">
						Button
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="list__link" to="/button-group">
						ButtonGroup
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="list__link" to="/icon">
						Icon
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="list__link" to="/image">
						Image
					</NavLink>
				</li>
			</ul>
		</nav>
	</div>
);
