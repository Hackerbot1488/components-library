import React, { Fragment, Component } from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";

interface sandboxState {
	switchOn: boolean;
}

export class ButtonGroupSandBox extends Component<{}, sandboxState> {
	state = {
		switchOn: true,
	};

	handleSwitchOn = () => {
		this.setState({ switchOn: true });
	};

	handleSwitchOff = () => {
		this.setState({ switchOn: false });
	};

	render() {
		const { switchOn } = this.state;

		return (
			<Fragment>
				<h2>
					<span>1. Horizontal button group:</span>
				</h2>
				<ButtonGroup>
					<Button active>First</Button>
					<Button>Middle</Button>
					<Button>Last</Button>
				</ButtonGroup>

				<h2>
					<span>2. Vertical button group:</span>
				</h2>
				<ButtonGroup vertical>
					<Button>First</Button>
					<Button active>Middle</Button>
					<Button>Last</Button>
				</ButtonGroup>

				<h2>
					<span>3. Switcher button group:</span>
				</h2>
				<ButtonGroup>
					<Button onClick={this.handleSwitchOn} active={switchOn}>
						ON
					</Button>
					<Button onClick={this.handleSwitchOff} active={!switchOn}>
						OFF
					</Button>
				</ButtonGroup>
			</Fragment>
		);
	}
}
/* eslint-enable */
