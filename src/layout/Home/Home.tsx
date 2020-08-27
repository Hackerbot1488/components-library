import React from "react";
import { DEPENDENCIES } from "./constants";
import "./Home.css";

export const Home: React.FC<{}> = () => (
	<>
		<h1 className="title">
			<span>Расширяемая коллекция Реакт компонентов.</span>
		</h1>
		<p>Все компоненты протестированы при помощи jest и enzyme.</p>
		<h3>
			<span>Dependencies:</span>
		</h3>
		<ul className="dependencies">
			{DEPENDENCIES.map(({ id, name, link }) => (
				<li className="dependencies__item" key={id}>
					<a
						className="dependencies__link"
						href={link}
						rel="noopener noreferrer"
						target="_blank"
					>
						{name}
					</a>
				</li>
			))}
		</ul>
	</>
);
