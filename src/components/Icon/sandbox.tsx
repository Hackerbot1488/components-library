/* eslint-disable */
import React, { Fragment } from "react";
import { Icon } from "./Icon";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Button } from "../Button/Button";

export const IconSandBox: React.FC<{}> = () => (
	<Fragment>
		<h2>
			<span>1. Base icon:</span>
		</h2>
		<Icon
			size={2}
			onClick={() => {
				console.log("!!!");
			}}
			name="atom"
		/>

		<h2>
			<span>2. Icons button group:</span>
		</h2>
		<ButtonGroup>
			<Button active>
				<Icon name="align-right" />
			</Button>
			<Button>
				<Icon name="align-center" />
			</Button>
			<Button>
				<Icon name="align-left" />
			</Button>
			<Button>
				<Icon name="align-justify" />
			</Button>
		</ButtonGroup>

		<h2>
			<span>3. Icon with size 8rem</span>
		</h2>
		<Icon title="badge" size={8} name="award" />

		<h2>
			<span>4. Disabling icon functionality:</span>
		</h2>
		<Icon
			size={2}
			disabled
			onClick={() => {
				console.log("!!!");
			}}
			name="atom"
		/>
	</Fragment>
);

/* eslint-enable */
