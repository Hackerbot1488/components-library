import React from "react";
import { SOCIAL_CONFIG, DEPENDENCIES } from "./constants";
import "./Home.css";

export const Home: React.FC<{}> = () => (
	<>
		<h1 className="title">
			<span>Расширяемая коллекция Реакт компонентов.</span>
		</h1>
		<p>Все компоненты написаны с проверкой esLint.</p>
		<p>
			Любой компонент вы можете скачать и свободно переписать под свои задачи,
			либо расширить его функциональность
		</p>
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
		<h3>
			<span>Author in social networks:</span>
		</h3>
		<ul className="socialList">
			{SOCIAL_CONFIG.map(({ id, socialLink, imageLink, imgHeight }) => (
				<li key={id} className="socialList__item">
					<a
						className="socialList__link"
						href={socialLink}
						rel="noopener noreferrer"
						target="_blank"
					>
						<img src={imageLink} height={imgHeight} alt={id} />
					</a>
				</li>
			))}
		</ul>
	</>
);
