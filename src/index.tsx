import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./layout/Home/Home";
import { ButtonSandbox } from "./components/Button/sandbox";
import { ButtonGroupSandBox } from "./components/ButtonGroup/sandbox";
import { IconSandBox } from "./components/Icon/sandbox";
import { ImageSandBox } from "./components/Image/sandbox";
import { ChipSandBox } from "./components/Chip/sandbox";
import { BadgeSandBox } from "./components/Badge/sandbox";
import { ListGroupSandBox } from "./components/ListGroup/sandbox";
import { InputSandBox } from "./components/Input/sandbox";
import { TabBarSandBox } from "./components/TabBar/sandbox";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/button" component={ButtonSandbox} />
					<Route path="/button-group" component={ButtonGroupSandBox} />
					<Route path="/icon" component={IconSandBox} />
					<Route path="/image" component={ImageSandBox} />
					<Route path="/chip" component={ChipSandBox} />
					<Route path="/badge" component={BadgeSandBox} />
					<Route path="/list-group" component={ListGroupSandBox} />
					<Route path="/input" component={InputSandBox} />
					<Route path="/input" component={TabBarSandBox} />
				</Switch>
			</App>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
